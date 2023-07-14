import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeSearch } from "./components/RecipeSearch";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Center flexDir="column">
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeSearch clickFn={setSelectedRecipe} />
      )}
    </Center>
  );
};
