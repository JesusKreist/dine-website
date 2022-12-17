export type ReservationsFormInputs = {
  name: string;
  email: string;
  month: string;
  day: string;
  yearOfReservation: string;
  hour: string;
  minutes: string;
  amOrPm: string;
  noOfPersons: string;
};

export type ErrorObject = {
  name: { message: string };
  email: { message: string };
  month: { message: string };
  day: { message: string };
  yearOfReservation: { message: string };
  hour: { message: string };
  minutes: { message: string };
  amOrPm: { message: string };
  noOfPersons: { message: string };
};

export interface ReservationsInputProps {
  register: (input: keyof ReservationsFormInputs) => any;
  errors: Partial<ErrorObject>;
}
