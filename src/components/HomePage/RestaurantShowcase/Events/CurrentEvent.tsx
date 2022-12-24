import { VStack, Button, Box, Stack } from "@chakra-ui/react";
import LinkButton from "../../../Navigation/LinkButton";
import EventSelector from "./EventSelector";
import EventShowcaseText from "./EventsShowcaseText";

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
    <Stack
      direction={{ base: "column-reverse", lg: "column" }}
      alignItems={{ base: "center", lg: "start" }}
      spacing="3rem"
    >
      <VStack
        alignItems={{ base: "center", lg: "start" }}
        spacing={{ base: "2rem", md: "2rem" }}
        paddingBottom={{ md: "2.5rem", lg: "1.5rem" }}
        width="100%"
      >
        <Box height="187px">
          <EventShowcaseText heading={title} text={description} />
        </Box>

        <LinkButton variant="light" />
      </VStack>

      <Box>
        <EventSelector
          handleEventChange={handleEventChange}
          currentEventId={id}
        />
      </Box>
    </Stack>
  );
};

export default CurrentEvent;
