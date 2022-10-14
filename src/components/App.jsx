import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../data/recipe.json';

export const App = () => {
  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
};
