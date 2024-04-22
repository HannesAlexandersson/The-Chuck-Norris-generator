import { useState, useEffect } from 'react';
import { Header, Redbtn } from './components/index.js';
import { getJoke } from './apiFunctions/index.js';//get all our API functions imported
import './App.css';

function App() {
  const [joke, setJoke] = useState('');//we store the joke in a state
  const [selectedCategory, setSelectedCategory] = useState('');//the categories are also stored in a state, this state updates when user choose a category
  const [loaded, setLoaded] = useState(false);//a state to handle if the " " should render
  const [jokes, setJokes] = useState([]); //state to store the saved jokesarray



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

  //fetch the joke and set the states
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
  }, [selectedCategory]);//render the joke when the category state changes
    
  //the category handler updates the category state when the user chooses a category
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);   
  };

  //handler for saving the joke to the joke array
  const handleSave = () => {
    if (joke.trim() === '') { //if there is a error and the joke is empty string
      return;
    }

  setJokes([...jokes, joke]);//set the state with the joke
};

  return (
    <>  
        <Header 
          handleGetJoke={handleGetJoke}         
          handleCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />

        <div className="displayContainer">

          {loaded ? (
            <><span>&quot;</span><p>{joke}</p><span>&quot;</span></>
          ) : (
            <></>
          )}
            
        </div>

        <div className='saveBtn-wrapper'>
          <Redbtn onClick={handleSave} >
            <p>save joke</p>
          </Redbtn>
        </div>

        <div className='savedContainer'>

        </div>
    </>
  );
}

export default App;
