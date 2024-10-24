import Layout from '../components/Layout';
import VehiclesTable from '../components/VehiclesTable';

export default function Dashboard() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6 text-slate-950">
        Electric Vehicle Data
      </h2>
      <VehiclesTable />
    </Layout>
  );
}
