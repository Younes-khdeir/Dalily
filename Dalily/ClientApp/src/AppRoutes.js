import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import HomePage from "./components/HomePage";
import AddCompanyPage from './components/AddCompanyPage';



const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/homePage',
    element: <HomePage />
  },
  {
    path: '/add-company',
    element: <AddCompanyPage />
  }

];

export default AppRoutes;




//import React from 'react';
//import { Route, Switch } from 'react-router-dom';
//import HomePage from './components/HomePage';
//import AddCompanyPage from './components/AddCompanyPage';

//const AppRoutes = () => {
//    return (
//        <Switch>
//            <Route exact path="/" component={HomePage} />
//            <Route path="/add-company" component={AddCompanyPage} />
//        </Switch>
//    );
//};

//export default AppRoutes;
