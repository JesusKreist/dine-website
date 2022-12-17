import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup.string().required("Email is required."),
  day: yup.string().required("Day is required."),
  month: yup.string().required("Month is required."),
  yearOfReservation: yup.string().required("Year is required."),
  hour: yup.string().required("Hour is required."),
  minute: yup.string().required("Minute is required."),
  amOrPm: yup.string().required("This field is required."),
});
