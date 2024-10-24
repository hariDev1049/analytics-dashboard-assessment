import csv from 'csvtojson';
import path from 'path';
import { promises as fs } from 'fs'; // Use promises for async/await

export async function GET(req) {
  // Path to your CSV file in the 'data-to-visualize' folder
  const csvFilePath = path.join(
    process.cwd(),
    'data-to-visualize',
    'Electric_Vehicle_Population_Data.csv'
  );
  const csvData = await fs.readFile(csvFilePath, 'utf-8');

  // Convert CSV to JSON with headers
  const jsonArray = await csv().fromString(csvData);

  // Extract the headers from the first object keys
  const headers = Object.keys(jsonArray[0]);

  // Limit to first 200 records
  const limitedData = jsonArray.slice(0, 200);

  // Return both headers and limited data
  return new Response(JSON.stringify({ headers, data: limitedData }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
