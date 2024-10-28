import { Navigate, Route, Routes } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
import GuestOnlyRoute from "../components/GuestOnlyRoute";

import Login from "../pages/signin";
import { HomeRoute } from "./HomeRoute";
import { TalentsRoute } from './TalentsRoute';
import { CategoriesRoute } from './CategoriesRoute';
import { PaymentsRoute } from './PaymentsRoute';
import MNavbar from "../components/Navbar";
import { EventsRoute } from './EventsRoute';
import { OrdersRoute } from './OrdersRoute';

export function AppRoutes() {
  return (
    <Routes>
      {/* kalau belum punya token baru bisa ke login, kalau sudah akan redirect ke / */}
      <Route
        path="login"
        element={
            // menggunakan children jika component ingin langsung dirender, Login sebagai children
          <GuestOnlyRoute>
            <Login />
          </GuestOnlyRoute>
        }
      />
      {/* kalau belum punya token baru bisa akses route dibawah, kalau belum akan redirect ke login */}
      <Route
        path="/"
        element={
          <>
            <MNavbar />
            <GuardRoute />{/* menggunakan <Outlet/> jika menggunakan nested routes  */}
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path='categories/*' element={<CategoriesRoute />} />
        <Route path='talents/*' element={<TalentsRoute />} />
        <Route path='payments/*' element={<PaymentsRoute />} />
        <Route path='events/*' element={<EventsRoute />} />
        <Route path='orders/*' element={<OrdersRoute />} />
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
}
