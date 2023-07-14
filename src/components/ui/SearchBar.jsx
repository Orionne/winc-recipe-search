import "./SearchBar.css";

export const SearchBar = ({ changeFn }) => {
  return (
    <input
      className="searchBar"
      name="recipeSearch"
      type="text"
      placeholder="Search for recipes..."
      onChange={changeFn}
    ></input>
  );
};
