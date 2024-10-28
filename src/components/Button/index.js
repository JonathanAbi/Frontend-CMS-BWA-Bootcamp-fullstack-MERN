import React from "react";
import Button from "react-bootstrap/Button";
// import {Button} from "react-bootstrap"; !!! Gabisa import kek gini !!!

export default function MButton({
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
  //loading untuk seperti kasus submit, saat button ditekan disabled akan dibuat true agar user tidak bisa melakukan spam submit
}
