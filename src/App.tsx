import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';
import LoginLayout from './layouts/LoginLayout';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<LoginLayout />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
