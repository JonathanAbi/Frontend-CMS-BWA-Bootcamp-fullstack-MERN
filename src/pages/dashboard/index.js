import React from "react";
import { Container } from "react-bootstrap";
import MBreadCrumb from "../../components/Breadcrumb";

export default function Dashboard() {
  return (
    <Container className="mt-3">
      <MBreadCrumb />
      <h1>Dashboard</h1>
    </Container>
  );
}
