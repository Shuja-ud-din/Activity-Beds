import DashboardLayout from "../layout/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AdminView = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AdminView;
