import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

function App() {
  const [recipeFormShown, showRecipeForm] = useState(false);
  const [recipes, setRecipes] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    setRecipes(JSON.parse(localStorage.getItem('Recipes')));
  },[])

  useEffect(()=>{
    // console.log('updating local storage')
    localStorage.setItem('Recipes', JSON.stringify(recipes))
    // console.log('new local storage: ', JSON.parse(localStorage.getItem('Recipes')))
  }, [recipes])

  let submitRecipe = (event) => {
    event.preventDefault()
  
    let newRecipeName = document.getElementById('newRecipeName').value;
    let newRecipeInstructions = document.getElementById('newRecipeInstructions').value;
    const newRecipesList = [...recipes,{
      name: newRecipeName,
      instructions : newRecipeInstructions
    }]
    // localStorage.setItem('Recipes', JSON.stringify(recipes))
    setRecipes(newRecipesList)
  }

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {
        recipeFormShown ? 
          <>
            <form id="recipe-form" name='recipe-form' onSubmit={submitRecipe}>
              <label htmlFor="newRecipeName">Recipe name: </label>
              <input type="text" id="newRecipeName" />
              <label htmlFor="newRecipeInstructions">Instructions:</label>
              <textarea id="newRecipeInstructions" placeholder="write recipe instructions here..." />
              <input type="submit"/>
            </form>
          </>
          : 
            <button onClick={ () => showRecipeForm(!recipeFormShown) }>Add Recipe</button>
        }
        <ul>
          {
            recipes.map((recipe, index)=>{
              return(
                <li key={index} onClick={()=>{navigate('/recipe', {state: recipe})}}>Name:{recipe.name}</li>
              )
            })
          }
        </ul>
    </div>
  );
}

export default App;