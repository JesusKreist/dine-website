import { Box, Flex, Image } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import CurrentEvent from "./CurrentEvent";
import { familyGatheringEvent } from "./EventsData";

const Events = () => {
  const [event, setEvent] = useState(familyGatheringEvent);

  return (
    <Fragment>
      <Image
        width="400px"
        height="320px"
        src="patterns/pattern-curve-top-right.svg"
        alt="curve pattern"
        objectFit="cover"
        objectPosition="top right"
        display={{ base: "none", md: "block" }}
      />

      <Box
        width="160px"
        position="relative"
        marginLeft={{ md: "3rem", lg: "8rem" }}
        bottom={{ md: "14.5rem", lg: "11.5rem" }}
        display={{ base: "none", md: "block" }}
      >
        <Image src="patterns/pattern-lines.svg" alt="lines pattern" />
      </Box>

      <Box
        display={{ base: "none", lg: "block" }}
        width={{ md: "48px", lg: "95px" }}
        height="2px"
        bgColor="#9e7f66"
        position="relative"
        marginLeft="43rem"
        top={event.lineCssTopPosition}
      ></Box>

      <Flex
        gap={{ md: "3.5rem", lg: "7rem" }}
        paddingLeft={{ lg: "10rem" }}
        marginTop={{ md: "-275px", lg: "-220px" }}
        paddingBottom={{ md: "5rem", lg: "10rem" }}
        alignItems="center"
        direction={{ md: "column", lg: "row" }}
      >
        <Image
          width={{ md: "573px", lg: "540px" }}
          height={{ md: "360px", lg: "600px" }}
          srcSet={`${event.imageUrlTablet} 768w, ${event.imageUrl} 1440w`}
          sizes="(max-width: 1200px) 768px, 1440px"
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
