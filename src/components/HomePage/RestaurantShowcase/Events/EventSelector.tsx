import { Box, Heading, VStack, Stack } from "@chakra-ui/react";
import {
  familyGatheringEvent,
  socialEventsEvent,
  specialEventsEvent,
} from "./EventsData";

import React from "react";

interface EventSelectorButtonProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  currentEventId: number;
  eventId: number;
  text: string;
}

const EventSelectorButton: React.FC<EventSelectorButtonProps> = ({
  onClick,
  currentEventId,
  eventId,
  text,
}) => {
  return (
    <VStack as="button" onClick={onClick} spacing="0">
      <Heading
        as="h5"
        fontSize="17px"
        lineHeight="28px"
        fontWeight="semibold"
        color="#242b37"
        letterSpacing="2.5px"
        opacity={currentEventId === eventId ? 1 : 0.5}
      >
        {text}
      </Heading>
      <Box
        display={{
          base: currentEventId === eventId ? "block" : "none",
          lg: "none",
        }}
        width={{ base: "48px", lg: "95px" }}
        height={{ base: "2px", md: "2px" }}
        bgColor="#9e7f66"
      ></Box>
    </VStack>
  );
};

interface EventSelectorProps {
  handleEventChange(event: any): void;
  currentEventId: number;
}

const EventSelector: React.FC<EventSelectorProps> = ({
  handleEventChange,
  currentEventId,
}) => {
  return (
    <Stack
      alignItems={{ base: "center", md: "start" }}
      direction={{ base: "column", md: "row", xl: "column" }}
      spacing={{ base: "1rem", md: "5rem", xl: "1rem" }}
    >
      <EventSelectorButton
        onClick={() => {
          handleEventChange(familyGatheringEvent);
        }}
        currentEventId={currentEventId}
        eventId={1}
        text="FAMILY GATHERING"
      />

      <EventSelectorButton
        onClick={() => {
          handleEventChange(specialEventsEvent);
        }}
        currentEventId={currentEventId}
        eventId={2}
        text=" SPECIAL EVENTS"
      />

      <EventSelectorButton
        onClick={() => {
          handleEventChange(socialEventsEvent);
        }}
        currentEventId={currentEventId}
        eventId={3}
        text=" SOCIAL EVENTS"
      />
    </Stack>
  );
};

export default EventSelector;
