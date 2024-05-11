import MealItem from './mealItem';
import classes from './mealsGrid.module.css';
const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
export default MealsGrid;
