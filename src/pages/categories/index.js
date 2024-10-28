import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import MButton from "../../components/Button";
import MBreadCrumb from "../../components/Breadcrumb";
import MAlert from "../../components/Alert";
import { accessCategories } from "../../const/access";
import { fetchCategories } from "../../redux/categories/actions";
import { setNotif } from "../../redux/notif/actions";
import { deleteData } from '../../utils/fetch';
import Table from "../../components/TableWithAction";
import Swal from 'sweetalert2'

export default function PageCategories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);
  const [access, setAccess] = useState({
    create: false,
    delete: false,
    update: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    const access = { create: false, delete: false, update: false };
    Object.keys(accessCategories).forEach(function (key, index) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id) => { //id didapat dari mapping yang dilakukan di TbodyWithAction
      Swal.fire({
        title: "Apa kamu yakin?",
        text: "Anda tidak akan dapat mengembalikan ini!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya, Hapus",
        cancelButtonText: "Batal",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteData(`/cms/categories/${id}`);
          dispatch(
            setNotif(
              true,
              "success",
              `berhasil delete kategori ${res.data.data.name}`
            )
          );
          dispatch(fetchCategories());
        }
      });
  };

  return (
    <Container className="mt-3">
      <MBreadCrumb textSecond="Categories" />
      {access.create && (
        <MButton
          className={"mb-3"}
          action={() => navigate("/categories/create")}
        >
          Tambah
        </MButton>
      )}

      {notif.status && (
        <MAlert type={notif.typeNotif} message={notif.message} />
      )}

      <Table
        status={categories.status}
        thead={["Name", "Action"]}
        data={categories.data}
        tbody={["name"]}
        editUrl={access.update ? `/categories/edit` : null}
        deleteAction={access.delete ? (id) => handleDelete(id) : null}
        withoutPagination
      />
    </Container>
  );
}
