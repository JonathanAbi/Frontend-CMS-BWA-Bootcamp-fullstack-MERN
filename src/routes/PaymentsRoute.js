import { Route, Routes } from "react-router-dom";
import Payment from "../pages/payments";
import Create from "../pages/payments/create";
import Edit from "../pages/payments/edit";

export function PaymentsRoute() {
  return (
    <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:paymentId" element={<Edit />} />
    </Routes>
  );
}
