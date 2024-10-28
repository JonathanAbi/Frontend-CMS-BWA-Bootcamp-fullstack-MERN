import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import MAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import MForm from "./form";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

export default function PageSignin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setAlert((prev) => ({
      ...prev,
      status: false,
    }));
    setForm({ ...form, [e.target.name]: e.target.value });
    // 2 cara modifikasi object useState
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await postData(`/cms/auth/signin`, form);
    console.log(res)
    if (res?.data?.data) {
      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.role,
          res.data.data.refreshToken,
          res.data.data.email
        )
      );
      setIsLoading(false);
      navigate("/");
    } else {
      setIsLoading(false);
      setAlert({
        status: true,
        message: res?.response?.data?.msg ?? "Internal server error",
        type: "danger",
      });
    }
  };
  // const token = localStorage.getItem("token");
  // if (token) return <Navigate to="/" replace={true} />; //redirect

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <MAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Form Login</Card.Title>
          <MForm
            form={form}
            handleChange={handleChange}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
  //md atau medium devices mengacu pada ukuran layar medium (biasanya 768px hingga 991px) md={12} berarti bahwa kontainer ini akan mengambil seluruh 12 kolom, atau 100% lebar
}
