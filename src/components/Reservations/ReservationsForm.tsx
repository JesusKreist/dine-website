import {
  Flex,
  Grid,
  Button,
  Box,
  Image,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { FormEvent } from "react";
import DatePicker from "./DatePicker";
import EmailInput from "./EmailInput";
import GuestsNumberPicker from "./GuestsNumberPicker";
import NameInput from "./NameInput";
import TimePicker from "./TimePicker";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorObject, ReservationsFormInputs } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";

const ReservationsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ReservationsFormInputs>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<ReservationsFormInputs> = (data) => {
    console.log(data);
  };

  console.log(watch("name"));

  return (
    <Flex
      className="reservations-form"
      width="540px"
      height="545px"
      bgColor="white"
      alignItems="center"
      justifyContent="center"
      position="relative"
      boxShadow="xl"
    >
      <Grid
        gridTemplateRows="repeat(6, 80px)"
        as="form"
        width="80%"
        fontSize="lg"
        gap="rem"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NameInput
          register={register}
          errors={errors as Partial<ErrorObject>}
        />
        <EmailInput
          register={register}
          errors={errors as Partial<ErrorObject>}
        />
        <DatePicker
          register={register}
          errors={errors as Partial<ErrorObject>}
        />
        <TimePicker
          register={register}
          errors={errors as Partial<ErrorObject>}
        />
        <GuestsNumberPicker />
        <Button type="submit" variant="brandPrimaryOnLight">
          MAKE RESERVATION
        </Button>
      </Grid>
      <Box position="absolute" top="500px" left="-80px" zIndex="-1">
        <Image src="patterns/pattern-lines.svg" alt="lines pattern" />
      </Box>
    </Flex>
  );
};

export default ReservationsForm;
