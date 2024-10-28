import React from "react";
import TextInputWithLabel from '../../components/TextInputWithLabel'
import MButton from '../../components/Button'
import Form from 'react-bootstrap/Form'


export default function MForm({ form, handleChange, handleSubmit, isLoading}) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email Address"
        name="email"
        value={form.email}
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
      />
      <TextInputWithLabel
        label="Password"
        name="password"
        value={form.password}
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <MButton
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        variant="primary"
        type="submit"
      >
        Submit
      </MButton>
    </Form>
  );
}
