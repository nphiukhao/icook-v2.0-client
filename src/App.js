import React, { Component } from 'react';
import RecipeForm from './components/add-recipe/add-recipes';
import { Route, Redirect } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';
import FilterAll from './components/filter-all/filter-all'
import FilterIngredient from './components/filter-ingredient/filter-ingredient';
import FilterTime from './components/filter-time/filter-time';
import LoginForm from './components/login-form/login-form';
import Navbar from './components/navbar/navbar';
import AddRecipeForm from './components/add-recipe/add-recipes';


class App extends Component {



  render() {
    return (
      <div className="App">
        <header>

          <Navbar/>
        </header>
        <main>
          <Route exact path={'/'} component={Dashboard}/>
          <Route path={'/login'} component={LoginForm}/>
          <Route path={'/recipe/all'} component={FilterAll}/>
          <Route path={'/recipe/ingredient'} component={FilterIngredient}/>
          <Route path={'/recipe/time'} component={FilterTime}/>
          <Route path={'/add'} component={AddRecipeForm}/>
          <Redirect exact from='*' to='/' />
          
          


        </main>
        
      </div>
    );
  }
}


export default App;
