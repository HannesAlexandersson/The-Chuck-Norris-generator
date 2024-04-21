import { useState, useEffect } from 'react';
import { Header } from './components/index.js';
import { getJoke } from './apiFunctions/index.js';//get all our API functions imported
import './App.css';

function App() {
  const [joke, setJoke] = useState('');//we store the joke in a state
  const [selectedCategory, setSelectedCategory] = useState('');//the categories are also stored in a state, this state updates when user choose a category
  const [loaded, setLoaded] = useState(false);//a state to handle if the " " should render


  //the clickhandler uses the imported fetch function to actually get the random joke from the API
  const handleGetJoke = async () => {
    try {
      const data = await getJoke('random');
      setJoke(data.value);
      setLoaded(true);//set the loaded state to display the "" + the actual joke      
    } catch (error) {
      console.error('naah... Chuck Norris stole the joke again:', error);
    }
  };

  
  useEffect(() => {
    const fetchData = async () => {
      if (selectedCategory) {
        try {
          const data = await getJoke(`random?category=${selectedCategory}`);
          setJoke(data.value);
          setLoaded(true);
        } catch (error) {
          console.error('naah... Chuck Norris stole the joke again:', error);
        }
      }
    };
  
    fetchData(); 
  }, [selectedCategory]);//we hook renders evertime the user selects an category
    
  
 
  //the category handler updates the category state when the user chooses a category
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);   
  };

  //console.log(selectedCategory, 'app category'); /*DEBUG */
  return (
      <Header
        handleGetJoke={handleGetJoke}
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

        <div className="displayContainer">

          {loaded ? (
            <><span>&quot;</span><p>{joke}</p><span>&quot;</span></>
          ) : (
            <></>
          )}
            
        </div>
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