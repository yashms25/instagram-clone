import * as Yup from "yup";
export const numberOnly = Yup.string("Invalid Parameters")
  .matches(/^[0-9]*$/, "Invalid Parameters")
  .label("Phone");

export const mobile_number = numberOnly
  .length(10, "Invalid Parameters")
  .label("Phone");

export const otp = numberOnly.length(6, "Invalid code").label("Login Code");

export const email = Yup.string()
  .required("")
  .email("Invalid Email")
  .label("Email");
