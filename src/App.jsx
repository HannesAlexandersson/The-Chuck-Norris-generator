import { useState, useEffect } from 'react';
import {
  Header,
  SendContainer,
  SavedContainer,
  StoreContainer,
  DisplayContainer,
} from './components/index.js';
import { getJoke } from './apiFunctions/index.js'; //get all our API functions imported

function App() {
  const [joke, setJoke] = useState(''); //we store the joke in a state
  const [selectedCategory, setSelectedCategory] = useState(''); //the categories are also stored in a state, this state updates when user choose a category
  const [loaded, setLoaded] = useState(false); //a state to handle if the " " should render
  const [jokes, setJokes] = useState([]); //state to store the saved jokesarray
  const [isModalOpen, setIsModalOpen] = useState(false); //state for the email popup window

  // fetch on initial page load
  useEffect(() => {
    handleGetJoke();
  }, []);

  //the click handler uses the imported fetch function to actually get the random joke from the API
  const handleGetJoke = async () => {
    if (selectedCategory) {
      try {
        const data = await getJoke(`random?category=${selectedCategory}`);
        setJoke(data.value);
        setLoaded(true);
      } catch (error) {
        console.error('naah... Chuck Norris stole the joke again:', error);
      }
    } else {
      try {
        const data = await getJoke('random');
        setJoke(data.value);
        setLoaded(true); //set the loaded state to display the "" + the actual joke
      } catch (error) {
        console.error('naah... Chuck Norris stole the joke again:', error);
      }
    }
  };

  /*--------SAVE LOGIC----------------*/
  const MAX_JOKE_LIMIT = 10;
  //handler for saving the joke to the joke array
  const handleSave = () => {
    if (joke.trim() === '') {
      //if there is a error and the joke is empty string
      alert(
        'There is no joke to save, please press the new joke button to generate a new joke!'
      );
      return;
    }
    //if the joke already exist in the array we warn the user
    if (jokes.includes(joke)) {
      alert('You have already saved this joke. Generate a new joke first!');
      return;
    }

    //we only allow 10 jokes to be saved in the list
    if (jokes.length >= MAX_JOKE_LIMIT) {
      alert(`Chuck only allow you to save ${MAX_JOKE_LIMIT} jokes.`);
      return;
    }

    setJokes([...jokes, joke]); //set the state with the joke
    
  };

  //handler for removing the joke from the save array
  const handleRemoveJoke = indexToRemove => {
    setJokes(jokes.filter((_, index) => index !== indexToRemove));
  };

  /*--------SAVE LOGIC END----------------*/

  /*--------DOWNLOAD LOGIC----------------*/
  const handleGetTxtFile = () => {
    let jokesText = 'Your Chuck Norris jokes:\n\n'; //format the txtfile with a title
    jokes.forEach((joke, index) => {
      jokesText += `${index + 1}. ${joke}\n`; //give each joke a number
    });

    const blob = new Blob([jokesText], { type: 'text/plain' }); // Create a Blob with text content
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mychucknorrisjokes.txt'; // Set the filename
    document.body.appendChild(a);
    a.click(); // Simulate a click on the link
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
  /*--------DOWNLOAD LOGIC ENDS----------------*/

  return (
    <>
      <Header
        handleGetJoke={handleGetJoke}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <DisplayContainer joke={joke} loaded={loaded} />

      <StoreContainer handleSave={handleSave} />

      <SavedContainer handleRemoveJoke={handleRemoveJoke} jokes={jokes} />

      <SendContainer
        jokes={jokes}
        isModalOpen={isModalOpen}
        handleGetTxtFile={handleGetTxtFile}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

export default App;
