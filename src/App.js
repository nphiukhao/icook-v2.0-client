import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';
import FilterAll from './components/filter-all/filter-all-recipe'
import FilterIngredient from './components/filter-ingredient/filter-ingredient';
import FilterTime from './components/filter-time/filter-time';
import LoginForm from './components/login-form/login-form';
import Navbar from './components/navbar/navbar';
import AddRecipeForm from './components/add-recipe/add-recipes';
import Recipe from './components/recipe/recipe'
import PrivateRoute from './routetypes/PrivateRoute';


class App extends Component {


  render() {
    return (
      <div className="App">
        <header>

          <Navbar/>
        </header>
        <main>
          <Route exact path={'/'} component={Dashboard}/>
          <Route exact path={'/login'} component={LoginForm}/>
          <PrivateRoute exact path={'/all'} component={FilterAll}/>
          <PrivateRoute exact path={'/ingredient'} component={FilterIngredient}/>
          <PrivateRoute exact path={'/time'} component={FilterTime}/>
          <PrivateRoute exact path={'/add'} component={AddRecipeForm}/>
          <PrivateRoute exact path={'/recipe/:id'} component={Recipe}/>
          <Redirect exact from='*' to='/' />
          
          


        </main>
        
      </div>
    );
  }
}


export default App;
