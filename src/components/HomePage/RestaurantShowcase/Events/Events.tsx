import { Box, Flex, Image } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import CurrentEvent from "./CurrentEvent";
import { familyGatheringEvent } from "./EventsData";

const Events = () => {
  const [event, setEvent] = useState(familyGatheringEvent);

  return (
    <Fragment>
      <Image
        width="500px"
        height="320px"
        src="patterns/pattern-curve-top-right.svg"
        alt="curve pattern"
        objectFit="cover"
        objectPosition="top right"
      />

      <Box width="160px" position="relative" marginLeft="8rem" bottom="11.5rem">
        <Image src="patterns/pattern-lines.svg" alt="lines pattern" />
      </Box>

      <Box
        width="95px"
        height="2px"
        bgColor="#9e7f66"
        position="relative"
        marginLeft="44rem"
        top={event.lineCssTopPosition}
      ></Box>

      <Flex
        columnGap="7rem"
        justifyContent="center"
        margin="-220px"
        alignItems="center"
      >
        <Image
          width="540px"
          height="600px"
          src={event.imageUrl}
          alt="family gathering image"
          objectFit="contain"
        />
        <CurrentEvent {...event} handleEventChange={setEvent} />
      </Flex>
    </Fragment>
  );
};

export default Events;
