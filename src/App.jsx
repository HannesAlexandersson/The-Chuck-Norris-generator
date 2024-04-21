import { useState, useEffect } from "react";
import { Header } from "./components/index.js";
import { getJoke } from "./apiFunctions/index.js"; //get all our API functions imported
import "./App.css";

function App() {
  const [joke, setJoke] = useState(""); //we store the joke in a state
  const [selectedCategory, setSelectedCategory] = useState(""); //the categories are also stored in a state, this state updates when user choose a category
  const [loaded, setLoaded] = useState(false); //a state to handle if the " " should render

  //the clickhandler uses the imported fetch function to actually get the random joke from the API
  const handleGetJoke = async () => {
    try {
      const data = await getJoke("random");
      setJoke(data.value);
      setLoaded(true); //set the loaded state to display the "" + the actual joke
    } catch (error) {
      console.error("naah... Chuck Norris stole the joke again:", error);
    }
  };

  // fetch on initial page load
  useEffect(() => {
    handleGetJoke();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedCategory) {
        try {
          const data = await getJoke(`random?category=${selectedCategory}`);
          setJoke(data.value);
          setLoaded(true);
        } catch (error) {
          console.error("naah... Chuck Norris stole the joke again:", error);
        }
      }
    };

    fetchData();
  }, [selectedCategory]); //we hook renders evertime the user selects an category

  //the category handler updates the category state when the user chooses a category
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
  };

  //console.log(selectedCategory, 'app category'); /*DEBUG */
  return (
    <>
      <Header
        handleGetJoke={handleGetJoke}
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="displayContainer">
        {loaded ? (
          <>
            <p>"{joke}"</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
