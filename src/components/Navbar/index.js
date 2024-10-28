import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import NavLink from "../NavAccess";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  accessCategories,
  accessTalents,
  accessEvents,
  accessParticipant,
  accessPayments,
  accessOrders,
  accessOrganizers,
  accessAdmin,
} from "../../const/access";
import { useState, useEffect } from "react";
import { userLogout } from "../../redux/auth/actions";

export default function MNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      let { role } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setRole(role);
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    dispatch(userLogout())
    window.location.href = "/login";
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            role={role}
            roles={accessCategories.read}
            action={() => navigate("/")}
          >
            Home
          </NavLink>
          <NavLink
            role={role}
            roles={accessCategories.read}
            action={() => navigate("/categories")}
          >
            Categories
          </NavLink>
          <NavLink
            role={role}
            roles={accessTalents.read}
            action={() => navigate("/talents")}
          >
            Talents
          </NavLink>
          <NavLink
            role={role}
            roles={accessPayments.read}
            action={() => navigate("/payments")}
          >
            Payment
          </NavLink>
          <NavLink
            role={role}
            roles={accessAdmin.read}
            action={() => navigate("/admin")}
          >
            Admin
          </NavLink>
          <NavLink
            role={role}
            roles={accessOrganizers.read}
            action={() => navigate("/organizers")}
          >
            Organizer
          </NavLink>
          <NavLink
            role={role}
            roles={accessEvents.read}
            action={() => navigate("/events")}
          >
            Events
          </NavLink>
          <NavLink
            role={role}
            roles={accessParticipant.read}
            action={() => navigate("/participant")}
          >
            Participant
          </NavLink>
          <NavLink
            role={role}
            roles={accessOrders.read}
            action={() => navigate("/orders")}
          >
            Orders
          </NavLink>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
  //() => navigate("/") harus menggunakan arrow function untuk menunda sampai link diklik, klo langsung navigate("/") akan langsung dieksekusi saat rendering
}
