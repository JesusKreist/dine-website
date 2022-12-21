import { VStack, Button, Box, Stack } from "@chakra-ui/react";
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
      direction={{ md: "column-reverse", lg: "column" }}
      alignItems="start"
      spacing="3rem"
    >
      <VStack
        alignItems={{ md: "center", lg: "start" }}
        spacing="2rem"
        paddingBottom={{ md: "2.5rem", lg: "1.5rem" }}
        width="100%"
      >
        <Box height="187px">
          <EventShowcaseText heading={title} text={description} />
        </Box>

        <Box>
          <Button variant="brandPrimaryOnLight">BOOK A TABLE</Button>
        </Box>
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

// import { VStack, Button, Box } from "@chakra-ui/react";
// import EventSelector from "./EventSelector";
// import EventShowcaseText from "./EventsShowcaseText";

// interface CurrentEventProps {
//   id: number;
//   title: string;
//   description: string;
//   handleEventChange(event: any): void;
// }

// const CurrentEvent: React.FC<CurrentEventProps> = ({
//   id,
//   title,
//   description,
//   handleEventChange,
// }) => {
//   return (
//     <VStack alignItems="start" spacing="2rem">
//       {/* <Box display={{ lg: "none" }} position={{ lg: "absolute" }}>
//         <EventSelector
//           handleEventChange={handleEventChange}
//           currentEventId={id}
//         />
//       </Box> */}

//   );
// };

// export default CurrentEvent;
