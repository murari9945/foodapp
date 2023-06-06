import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Description from './components/Description/Description';
import { Fragment } from 'react';
import MealsList from './components/Meals/MealsList';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
     <Header/>
     <main>
      <Meals/>
     </main>
    </Fragment>
  );
}

export default App;
