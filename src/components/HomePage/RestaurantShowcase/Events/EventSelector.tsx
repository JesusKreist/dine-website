import { Box, Heading, VStack } from "@chakra-ui/react";
import {
  familyGatheringEvent,
  socialEventsEvent,
  specialEventsEvent,
} from "./EventsData";

interface EventSelectorProps {
  handleEventChange(event: any): void;
  currentEventId: number;
}

const EventSelector: React.FC<EventSelectorProps> = ({
  handleEventChange,
  currentEventId,
}) => {
  return (
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
          letterSpacing=".25ch"
          opacity={currentEventId === 1 ? 1 : 0.5}
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
          letterSpacing=".25ch"
          opacity={currentEventId === 2 ? 1 : 0.5}
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
          letterSpacing=".25ch"
          opacity={currentEventId === 3 ? 1 : 0.5}
        >
          SOCIAL EVENTS
        </Heading>
      </Box>
    </VStack>
  );
};

export default EventSelector;
