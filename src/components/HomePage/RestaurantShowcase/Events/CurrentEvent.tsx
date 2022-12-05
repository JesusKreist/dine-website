import { VStack, Button, Box } from "@chakra-ui/react";
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
      <EventSelector
        handleEventChange={handleEventChange}
        currentEventId={id}
      />
    </VStack>
  );
};

export default CurrentEvent;
