import config from './config';

//we use the same fetch function for all fetch calls, we just send a different endURL as argument
  function getJoke(endPoint){
    const baseUrl = config;
    const endUrl = endPoint;
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
                alert('Unfortunately we could not find any Chuck Norris joke at the moment, Chuck Norris probably ate them all');
                console.error('error fetching joke from API, please check the connection or something');
                throw new Error('Failed to fetch a joke'); 
            }
        })    
        .catch(error => {
            console.error('Error:', error);// we rethrow the error to the caller component
            throw error;
        })
    );
  }

  export default getJoke