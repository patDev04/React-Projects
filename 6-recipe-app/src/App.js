import React, { useState } from "react";
import "./styles/App.scss";
import RecipeList from "./component/RecipeList";
import CategoryButton from "./component/CategoryButton";
import recipeApi from "./recipe-api.json";

const allCategory = ["all", ...new Set(recipeApi.map((cat) => cat.category))];

function App() {
  const [recipe, setRecipe] = useState(recipeApi);
  const [categories] = useState(allCategory);
  const [catLength, setCatLength] = useState("");

  const filteredRecipe = (category) => {
    if (category === "all") {
      setRecipe(recipeApi);
      setCatLength(recipe.length);

      return;
    }
    const newList = recipe?.filter((item) => item.category === category);
    // setRecipe(newList);
    setCatLength(newList.length);
    console.log(newList);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Great food recipes</h1>
        <h5>recipes for all occassions</h5>
      </div>
      <div className="category">
        <CategoryButton
          categories={categories}
          filteredItems={filteredRecipe}
        />
      </div>
      {catLength && catLength}
      {}
      <main className="list">
        <RecipeList recipe={recipe} />
      </main>
    </div>
  );
}

export default App;
