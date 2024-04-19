import config from './config';

//if we dont want an hardcoded copy of the categories and instead want to dynamicly fetch them each time we can use this function and set the category state with the result
  function getCategories(){
    const baseUrl = config;
    const endUrl = 'categories';
    const url = baseUrl + endUrl;
    
    return(
        fetch(url, { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',                
            },       
        })
        .then(response => {
            if (response.ok) {
                console.log('Data received successfully');            
                return response.json(); 
            } else {
                console.error('Unfortunately we could not find any Chuck Norris joke at the moment, Chuck Norris probably ate them all');
                throw new Error('Failed to fetch a joke'); 
            }
        })    
        .catch(error => {
            console.error('Error:', error);
            throw error;
        })
    );
  }

  export default getCategories