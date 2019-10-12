import React, { Component } from 'react';


export default class AddRecipeForm extends Component {

    render() {
        return (
            <section> 
                <form onSubmit={console.log('submited')}>
                    <label id='recipe-title'>Recipe Title:
                      <input name= 'recipe-title' type='text'></input>
                    </label>
                    <label id='recipe-desc'>Description:
                      <input name= 'recipe-desc' type='text'></input>
                    </label>

                    <label id='recipe-ingre'>Ingredients Needed:
                      <input name= 'recipe-ingre' type='text'></input>
                    </label>
                    <label id='recipe-instr'>Instructions:
                      <input name= 'recipe-instr' type='text'></input>
                    </label>
                    <button className='addButton' type='submit'>Add Recipe</button>
                    
                </form>
            </section>
        )
    }
}