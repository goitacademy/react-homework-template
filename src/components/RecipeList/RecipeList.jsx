import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { ListItem } from './RecipeList.styled.js';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <ListItem key={recipe.id}>
          <Recipe recipe={recipe} />
        </ListItem>
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
