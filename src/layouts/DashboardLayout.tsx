import { Outlet } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';

export default function DashboardLayout() {
  return (
    <>
      <DashboardSidebar />
      <div>
        <DashboardHeader />
        <Outlet />
      </div>
    </>
  );
}
