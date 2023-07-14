import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={recipe.recipe.label}
            src={recipe.recipe.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {recipe.recipe.label}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              textTransform={"capitalize"}
            >
              {recipe.recipe.mealType}
            </Text>
            <Text fontSize={"lg"}>
              Total cooking time: {recipe.recipe.totalTime} minutes
              <br />
              Servings: {recipe.recipe.yield}
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
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
          </SimpleGrid>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Ingredients
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  {recipe.recipe.ingredientLines.map((ingredient, index) => {
                    if (
                      index !==
                        Math.ceil(recipe.recipe.ingredientLines.length / 2) &&
                      index <
                        Math.ceil(recipe.recipe.ingredientLines.length / 2)
                    ) {
                      return <ListItem key={index}>{ingredient}</ListItem>;
                    }
                  })}
                </List>
                <List spacing={2}>
                  {recipe.recipe.ingredientLines
                    .slice(recipe.recipe.ingredientLines.length / 2 + 1)
                    .map((ingredient, index) => {
                      return <ListItem key={index}>{ingredient}</ListItem>;
                    })}
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Total nutrients
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Calories
                    </Text>{" "}
                    {Math.round(recipe.recipe.calories)}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      {recipe.recipe.totalNutrients.CHOCDF.label}
                    </Text>{" "}
                    {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}{" "}
                    {recipe.recipe.totalNutrients.CHOCDF.unit}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      {recipe.recipe.totalNutrients.PROCNT.label}
                    </Text>{" "}
                    {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}{" "}
                    {recipe.recipe.totalNutrients.PROCNT.unit}
                  </ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      {recipe.recipe.totalNutrients.FAT.label}
                    </Text>{" "}
                    {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}{" "}
                    {recipe.recipe.totalNutrients.FAT.unit}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      {recipe.recipe.totalNutrients.CHOLE.label}
                    </Text>{" "}
                    {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)}{" "}
                    {recipe.recipe.totalNutrients.CHOLE.unit}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      {recipe.recipe.totalNutrients.NA.label}
                    </Text>{" "}
                    {Math.round(recipe.recipe.totalNutrients.NA.quantity)}{" "}
                    {recipe.recipe.totalNutrients.NA.unit}
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Health labels
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  {recipe.recipe.healthLabels.map((label, index) => {
                    if (
                      index !==
                        Math.ceil(recipe.recipe.healthLabels.length / 2) &&
                      index < Math.ceil(recipe.recipe.healthLabels.length / 2)
                    ) {
                      return (
                        <ListItem key={index}>
                          <Badge px={2} py={1} bg={"purple.100"}>
                            {label}
                          </Badge>
                        </ListItem>
                      );
                    }
                  })}
                </List>
                <List spacing={2}>
                  {recipe.recipe.healthLabels
                    .slice(recipe.recipe.healthLabels.length / 2 + 1)
                    .map((label, index) => {
                      return (
                        <ListItem key={index}>
                          <Badge px={2} py={1} bg={"purple.100"}>
                            {label}
                          </Badge>
                        </ListItem>
                      );
                    })}
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          <Button
            onClick={() => clickFn()}
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Back to the list
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
