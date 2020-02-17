import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import Landing from './components/dashboard/Landing';
import FilterAll from './components/filter-all/filter-all-recipe'
import FilterIngredient from './components/filter-ingredient/filter-ingredient';
import FilterTime from './components/filter-time/filter-time';
import LoginForm from './components/login-form/login-form';
import Navbar from './components/navbar/navbar';
import AddRecipeForm from './components/add-recipe/add-recipes';
import Recipe from './components/recipe/recipeWParamsId'
import BrowseRecipes from './components/BrowseRecipes/BrowseRecipes'
import PrivateRoute from './routetypes/PrivateRoute';
import RecipeContext from './context/RecipeContext'
import CommandBar from './components/CommandBar/CommandBar'
import BrowseRecipe from './components/BrowseRecipe/BrowseRecipe'


class App extends Component {

  static contextType = RecipeContext

  render() {
    console.log(this.context.isLoggedIn)
    return (
      <div className="App">
        <header>
          {this.context.isLoggedIn ? <CommandBar/> : <Navbar/>}
        </header>
        <main>
          {this.context.isLoggedIn ? null : <Route exact path={'/'} component={Landing}/>}
          {/* <Route exact path={'/'} component={Landing}/>  */}
          <Route exact path={'/login'} component={LoginForm}/>
          <PrivateRoute exact path={'/all'} component={FilterAll}/> 
          <PrivateRoute exact path={'/ingredient'} component={FilterIngredient}/>
          <PrivateRoute exact path={'/time'} component={FilterTime}/>
          <PrivateRoute exact path={'/add'} component={AddRecipeForm}/>
          <PrivateRoute exact path={'/browse'} component={BrowseRecipes}/>
          <PrivateRoute exact path={'/browse/:id'} component={BrowseRecipe}/> 
          <PrivateRoute exact path={'/recipe/:id'} component={Recipe}/>
          <Redirect exact from='*' to='/' />
          
        </main>
        
      </div>
    );
  }
}


export default App;
