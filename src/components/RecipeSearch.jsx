import { useState } from "react";
import { RecipeListPage } from "../pages/RecipeListPage";
import { data } from "../utils/data.js";
import { SearchBar } from "./ui/SearchBar";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <SearchBar changeFn={handleChange} />
      <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />
    </>
  );
};
