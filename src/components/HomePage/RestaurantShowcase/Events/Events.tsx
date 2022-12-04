import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import RestaurantShowcaseText from "../RestaurantShowcaseText";
import EventShowcaseText from "./EventsShowcaseText";

const familyGatheringEvent = {
  id: 1,
  title: "Family Gathering",
  description:
    "We love cathering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
  lineCssTopPosition: "13.3rem",
  imageUrl: "homepage/family-gathering-desktop@2x.jpg",
};

const specialEventsEvent = {
  id: 2,
  title: "Special Events",
  description:
    "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
  lineCssTopPosition: "15.3rem",
  imageUrl: "homepage/special-events-desktop@2x.jpg",
};

const socialEventsEvent = {
  id: 3,
  title: "Social Events",
  description:
    "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
  lineCssTopPosition: "17.8rem",
  imageUrl: "homepage/social-events-desktop@2x.jpg",
};

interface CurrentEventProps {
  id: number;
  title: string;
  description: string;
  handleEventChange(event: any): void;
}
const CurrentEvent: React.FC<CurrentEventProps> = ({
  id,
  title,
  description,
  handleEventChange,
}) => {
  return (
    <VStack className="my_stack" alignItems="start" spacing="2rem">
      <Box height="187px">
        <EventShowcaseText heading={title} text={description} />
      </Box>
      <Box paddingBottom="1.5rem">
        <Button
          borderRadius="none"
          variant="brandPrimary"
          colorScheme="blackAlpha"
          padding="2rem 3rem"
          fontSize="xl"
          fontWeight="bold"
          letterSpacing="0.2ch"
        >
          BOOK A TABLE
        </Button>
      </Box>

      <VStack alignItems="start">
        <Box
          as="button"
          onClick={() => {
            handleEventChange(familyGatheringEvent);
          }}
        >
          <Heading
            as="h5"
            fontSize="17px"
            lineHeight="28px"
            fontWeight="semibold"
            color="#242b37"
            opacity={id === 1 ? 1 : 0.5}
          >
            FAMILY GATHERING
          </Heading>
        </Box>

        <Box
          as="button"
          onClick={() => {
            handleEventChange(specialEventsEvent);
          }}
        >
          <Heading
            as="h5"
            fontSize="17px"
            lineHeight="28px"
            fontWeight="semibold"
            color="#242b37"
            opacity={id === 2 ? 1 : 0.5}
          >
            SPECIAL EVENTS
          </Heading>
        </Box>

        <Box
          as="button"
          onClick={() => {
            handleEventChange(socialEventsEvent);
          }}
        >
          <Heading
            as="h5"
            fontSize="17px"
            lineHeight="28px"
            fontWeight="semibold"
            color="#242b37"
            opacity={id === 3 ? 1 : 0.5}
          >
            SOCIAL EVENTS
          </Heading>
        </Box>
      </VStack>
    </VStack>
  );
};

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
