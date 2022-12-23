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
        gap={{ base: "2rem", md: "3.5rem", lg: "7rem" }}
        paddingLeft={{ lg: "10rem" }}
        marginTop={{ base: "5rem", md: "-275px", lg: "-220px" }}
        paddingBottom={{ md: "5rem", lg: "10rem" }}
        alignItems="center"
        direction={{ base: "column", lg: "row" }}
      >
        <Box as="picture">
          <Box
            as="source"
            media="(max-width: 400px)"
            srcSet={event.imageUrlMobile}
          ></Box>
          <Box
            as="source"
            media="(min-width: 400px) and (max-width: 1200px)"
            srcSet={event.imageUrlTablet}
          ></Box>
          <Image
            boxShadow="2xl"
            width={{ base: "85%", md: "573px", lg: "540px" }}
            height={{ md: "360px", lg: "600px" }}
            src={event.imageUrl}
            alt={`${event.title} event image`}
            objectFit="contain"
            margin={{ base: "0 auto", lg: "unset" }}
          />
        </Box>

        <CurrentEvent {...event} handleEventChange={setEvent} />
      </Flex>
    </Fragment>
  );
};

export default Events;
