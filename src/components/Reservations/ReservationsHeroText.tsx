import { Heading, Text } from "@chakra-ui/react";
import { Fragment } from "react";

const ReservationsHeroText = () => {
  return (
    <Fragment>
      <Heading
        as="h2"
        fontSize={"80px"}
        fontWeight="light"
        lineHeight={"80px"}
        marginTop="9rem"
        paddingBottom="0.5rem"
      >
        Reservations
      </Heading>
      <Text fontSize="xl" paddingBottom="2rem">
        We can&apos;t wait to host you. If you have any special requirements
        please feel free to call on the phone number below. We&apos;ll be happy
        to accommodate you.
      </Text>
    </Fragment>
  );
};

export default ReservationsHeroText;
