import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/mealsGrid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All Meals',
  descripton: 'Browse the delicious meals shared by our vibrant community',
};

async function Meal() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const Meals = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<h1 className={classes.loading}>Fetching Meals...</h1>}
        >
          <Meal />
        </Suspense>
      </main>
    </>
  );
};
export default Meals;
