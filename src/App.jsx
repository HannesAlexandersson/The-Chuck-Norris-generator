import { useState } from 'react';
import { Header } from './components/index.js';
import {getJoke } from './apiFunctions/index.js';//get all our API functions
//import categoriesData from './categories.json'; //I thought it would be more convenient to just have the list in the filesystem then to fetch the list each time, But if you dont like it the getCategories function fetches the list so we can easily implement it
import './App.css';

function App() {
  const [joke, setJoke] = useState('');//we store the joke in a state
  const [catJoke, setCatJoke] = useState('');//the category jokes have their own state to be able to display it on different places
  const [selectedCategory, setSelectedCategory] = useState('');//the categories are also stored in a state, this state updates when user choose a category



  //the clickhandler uses the imported fetch function to actually get the random joke from the API
  const handleGetJoke = async () => {
    try {
      const data = await getJoke('random');
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  //the clickhandler for the category jokes uses the imported fetch function to get a joke according to selected category
  const handleGetCategoryJoke = async () => {
    if (selectedCategory) {
      try {
        const data = await getJoke(`random?category=${selectedCategory}`);
        setCatJoke(data.value);
      } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
      }
    } else {
      alert('Please select a category');//we tell the user that they must choose a category
    }
  };

  //the category handler updates the category state when the user chooses a category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);    
  };

  //console.log(selectedCategory, 'app category'); /*DEBUG */
  return (
    <>  
      <Header 
        handleGetJoke={handleGetJoke}
        handleGetCategoryJoke={handleGetCategoryJoke}   
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

export default App;

/*
 <div className='page-wrapper'>
      <div className='main-container'>
        <div className='headerWrap'>
          <h1>Get your daily Chuck Norris joke</h1>
        </div>   

        <div className='randomJoke-container'>     
          <button onClick={handleGetJoke}>Get a random joke</button>

          <div className="displayBox">
            <p>{joke}</p>
          </div>
          

          </div>
        </div>

        <div className='secondary-container'>

          <div className='categories-container'>  

            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              {categoriesData.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button onClick={handleGetCategoryJoke}>Get joke by category</button>

            <div className="displayBox">
              <p>{catJoke}</p>
            </div>

          </div>

        </div>


      </div>
*/