import React from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import MButton from "../../components/Button";
import { Form } from "react-bootstrap";

export default function CategoriesForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Input category name"}
        label={"Category name"}
        name={"name"}
        value={form.name}
        type={"text"}
        onChange={handleChange}
      />
      <MButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Update" : "Save"}
      </MButton>
    </Form>
  );
}
