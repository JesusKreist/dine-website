import { Flex, Grid, Button, Box, Image, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
  const [guests, setGuests] = useState(1);

  const handleIncrement = (event: React.FormEvent) => {
    event.preventDefault();
    setGuests(guests + 1);
  };

  const handleDecrement = (event: React.FormEvent) => {
    event.preventDefault();
    if (guests === 1) return;
    setGuests(guests - 1);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ReservationsFormInputs>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const toast = useToast();

  const onSubmit: SubmitHandler<ReservationsFormInputs> = (data) => {
    console.log("submitted");
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        day: "",
        hour: "",
        minute: "",
        month: "",
        yearOfReservation: "",
      });

      setGuests(1);

      toast({
        title: "Reservation created.",
        description: "We've made your reservation.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  }, [isSubmitSuccessful, reset, toast]);

  // return <Box height="500px" width="400px" border="2px solid green"></Box>;

  return (
    <Flex
      alignSelf="center"
      className="reservations-form"
      width={{
        sm: "90%",
        md: "60vw",
        lg: "540px",
        // xl: "900px",
        "2xl": "540px",
      }}
      margin={{ base: "0 auto", "2xl": "unset" }}
      height={{ base: "585px", md: "545px" }}
      bgColor="white"
      alignItems="center"
      justifyContent="center"
      position="relative"
      boxShadow="2xl"
    >
      <Grid
        gridTemplateRows="repeat(6, 80px)"
        as="form"
        width={{ base: "90%" }}
        fontSize="lg"
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
        <GuestsNumberPicker
          guests={guests}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        <Button
          type="submit"
          variant="brandPrimaryOnLight"
          height="64px"
          alignSelf="end"
        >
          MAKE RESERVATION
        </Button>
      </Grid>
      <Box
        position="absolute"
        top="500px"
        left="-80px"
        zIndex="-1"
        display={{ base: "none", lg: "block" }}
      >
        <Image src="patterns/pattern-lines.svg" alt="lines pattern" />
      </Box>
    </Flex>
  );
};

export default ReservationsForm;
