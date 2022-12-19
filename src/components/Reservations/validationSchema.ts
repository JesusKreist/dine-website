import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup.string().required("Email is required."),
  day: yup
    .number()
    .required()
    .min(1, "Day is invalid.")
    .max(31, "Day is invalid."),
  month: yup
    .number()
    .required()
    .min(1, "Month is invalid.")
    .max(12, "Month is invalid."),
  yearOfReservation: yup
    .number()
    .required()
    .min(2000, "Year is invalid.")
    .max(2050, "Year is invalid."),
  hour: yup
    .number()
    .required()
    .min(1, "Hour is invalid.")
    .max(12, "Hour is invalid."),
  minute: yup
    .number()
    .required()
    .min(1, "Hour is invalid.")
    .max(59, "Hour is invalid."),
  amOrPm: yup.string().required("This field is required."),
});
