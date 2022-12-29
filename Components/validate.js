import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  firstName: Yup.string("Must be a name").required("Required"),
  lastName: Yup.string("Must be a name").required("Required"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirm: Yup.string()
    .required("You need to re-eneter the password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  phone: Yup.number("Must be a number").required("Email Address is Required"),
  check: Yup.bool().oneOf([true], "Accept Terms & Conditions is required"),
});

export const loginValidationSchemaShort = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
