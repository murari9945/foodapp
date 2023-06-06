import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Description from './components/Description/Description';
import { Fragment } from 'react';
import MealsList from './components/Meals/MealsList';

function App() {
  return (
    <Fragment>
     <Header/>
     <MealsList/>
    </Fragment>
  );
}

export default App;
