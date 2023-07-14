import {
  Badge,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// used template from
// https://chakra-templates.dev/components/cards

export const Recipe = ({ recipe, clickFn }) => {
  return (
    <Center
      py={6}
      _hover={{ transform: "scale(1.01)" }}
      cursor="pointer"
      onClick={() => clickFn(recipe)}
    >
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={recipe.recipe.image} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {recipe.recipe.label}
          </Heading>
          <Text
            fontWeight={600}
            color={"gray.500"}
            size="sm"
            mb={4}
            textTransform={"uppercase"}
          >
            {recipe.recipe.mealType}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            textTransform={"capitalize"}
          >
            {recipe.recipe.dishType}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {recipe.recipe.healthLabels.includes("Vegetarian") ? (
              <Badge px={2} py={1} bg={"purple.100"}>
                Vegetarian
              </Badge>
            ) : (
              <></>
            )}
            {recipe.recipe.healthLabels.includes("Vegan") ? (
              <Badge px={2} py={1} bg={"purple.100"}>
                Vegan
              </Badge>
            ) : (
              <></>
            )}
          </Stack>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            {recipe.recipe.dietLabels.length ? (
              recipe.recipe.dietLabels.map((diet) => (
                <Badge px={2} py={1} bg={"green.100"} key={diet}>
                  {diet}
                </Badge>
              ))
            ) : (
              <></>
            )}
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {recipe.recipe.cautions.length ? (
              recipe.recipe.cautions.map((caution) => (
                <Badge px={2} py={1} bg={"red.100"} key={caution}>
                  {caution}
                </Badge>
              ))
            ) : (
              <></>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};
