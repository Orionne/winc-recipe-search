import { Center, Flex } from "@chakra-ui/react";
import { Recipe } from "../components/Recipe";

export const RecipeListPage = ({ recipes, clickFn }) => {
  return (
    <Center flexDir="column">
      <Flex gap={10} py="10" flexWrap="wrap" justify={"center"}>
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe.label} recipe={recipe} clickFn={clickFn} />
        ))}
      </Flex>
    </Center>
  );
};
