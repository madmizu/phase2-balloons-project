import './App.css';
import { useState } from'react';
import Header from './components/Header.js';
import BalloonCollection from './components/BalloonCollection.js';
import WatchList from './components/WatchList.js';

import NetflixArray from './temporary/NetflixArray.js'
import PrimeArray from './temporary/PrimeArray.js'
import DisneyArray from './temporary/DisneyArray.js'
import HboArray from './temporary/HboArray.js'
import HuluArray from './temporary/HuluArray.js'
import GenresArray from './temporary/GenresArray.js'

const numOfBalloons = 6;

function App() {
//   useEffect(()=>{
//   // Fetch API for Netflix & set 'netflix' state to the data returned
//   fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&page=13&output_language=en&language=en", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
//       "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
//     }
//   })
//     .then(response => response.json())
//     .then(json=>setNetflix([json].map(item=> item.results)[0]))
//   // Fetch API for Amazon Prime & set 'prime' state to the data returned
//     fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=prime&type=movie&genre=5&page=1&output_language=en&language=en", {
// 	    "method": "GET",
// 	    "headers": {
// 		    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
// 		    "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
// 	    }
//     })
//     .then(response => response.json())
//     .then(json=>setPrime([json].map(item=> item.results)))
//   // Fetch API for DisneyPlus & set 'disney' state to the data returned
//     fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=disney&type=movie&genre=5&page=1&output_language=en&language=en", {
// 	    "method": "GET",
// 	    "headers": {
// 		    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
// 		    "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
// 	    }
//     })
//     .then(response => response.json())
//     .then(json=>setDisney([json].map(item=> item.results)))
//   // Fetch API for HBO & set 'hbo' state to the data returned
//     fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hbo&type=movie&genre=5&page=1&output_language=en&language=en", {
// 	    "method": "GET",
// 	    "headers": {
// 		    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
// 		    "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
// 	    }
//     })
//     .then(response => response.json())
//     .then(json=>setHbo([json].map(item=> item.results)))
  // // Fetch API for Hulu & set 'hulu' state to the data returned
  //   fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hulu&type=movie&genre=5&page=1&output_language=en&language=en", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  //       "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json=>setHulu([json].map(item=> item.results)))
  //   .catch(err =>console.error(err));
  // }, []);

  
  const [netflix, setNetflix] = useState ([NetflixArray].map(item=> item.results));
  const [prime, setPrime] = useState ([PrimeArray].map(item=> item.results));
  const [disney, setDisney] = useState ([DisneyArray].map(item=> item.results));
  const [hbo, setHbo] = useState ([HboArray].map(item=> item.results));
  const [hulu, setHulu] = useState ([HuluArray].map(item=> item.results));
  const [genres, setGenres] = useState ([GenresArray]);
  // The states above will utilize 'set' when we fetch the APIs again. Right now they are pulling their data from the temporary arrays that we created to prevent running out of API fetches.

  // This is used for changing the daytime and nighttime look of the page.
  const [toggleMode, setToggleMode] = useState ("startLight");

  // This combines all of our data into one array. I tried taking this out of state and it did not work, but we probably will not use 'setAllServices'
  const [allServices, setAllServices] = useState(
          [...netflix[0],...prime[0],...disney[0],...hbo[0],...hulu[0]]);

  // These are used to make the movies attached to our balloons, 'semi' random. It sets the start of our filter list array to a random index(place) within the original data and then renders the next 6 movies from that point. There is 'allListStart' for the 'allServices' list because that has more movies in the array. There is 'listStart' for each service provider, because they have less movies that the 'allServices' list.
  const [allListStart, setAllListStart] = useState(()=> Math.floor(Math.random() * (34))+ 0)
  const [listStart, setlistStart] = useState(()=> Math.floor(Math.random() * (2))+ 0)
  
  // This is the list that will be passed to our balloons. The filteredList will always = an array of 6 movies. The list changes based on the Service that is selected by the user.
  const [filteredList, setFilteredList] = useState((allServices.slice(allListStart, numOfBalloons + allListStart)));

  // This is to show our Movie Card or return to BalloonCollection. 
  const [selectedBalloon, setSelectedBalloon] = useState(undefined);

  // (in ToggleFeature) This changes the 'class name' of a number of things from light to dark for the daytime vs nighttime toggle
  function handleToggleMode () {
    if (toggleMode === "startLight") {
      setToggleMode("dark");
    } else if (toggleMode === "light") {
      setToggleMode("dark");
    } else {
      setToggleMode("light")
   }
  }

  // (in FilterService) When the Filter Service selection is changed, the 'filteredList' will be updated with 6 new movies from the selected category. This function is attached to the Filter Service's 'onChange' listener in the FilteredService component
  function filterMovies (event) {
    if (event.target.value === "All") {
      setFilteredList(allServices.slice(allListStart, numOfBalloons + allListStart));
    } else if (event.target.value === "Netflix") {
      setFilteredList(netflix[0].slice(listStart, numOfBalloons + listStart));
    } else if (event.target.value === "Prime") {
      setFilteredList( prime[0].slice(listStart, numOfBalloons + listStart));
    } else if (event.target.value === "Disney") {
      setFilteredList(disney[0].slice(listStart, numOfBalloons + listStart));
    } else if (event.target.value === "HBO") {
      setFilteredList(hbo[0].slice(listStart, numOfBalloons + listStart));
    } else if (event.target.value === "Hulu") {
      setFilteredList(hulu[0].slice(listStart, numOfBalloons + listStart));
    } else {
      setFilteredList([]);
    }
    return filteredList
  };

// (in MovieCard) This is the function to return to BalloonCollection, or add gift to watch list.
function returnToCollection (clickRegift) {
  setSelectedBalloon(undefined)
  setFilteredList (filteredList.map((movie)=> movie.title === clickRegift.target.parentNode.firstChild.textContent ? {...movie, saved: false} : movie));
}

  // (in BalloonGifts) This is the click handler for each balloon; when clicked, will show one MovieCard.
  function popBalloon(poppedBalloon) {
    setSelectedBalloon((filteredList.filter((movie)=> movie.imdbID === poppedBalloon.target.attributes.imdbid.value)))
  }

  // (in MovieCard) This function is the click handler for 'keeping' a gift & adding to the WatchList
function keepGift (clickKeep) {
  setSelectedBalloon(undefined);
  setFilteredList (filteredList.map((movie)=> movie.title === clickKeep.target.parentNode.firstChild.textContent ? {...movie, saved: true} : movie));
}

function openMovieCard (clickedGift) {
  setSelectedBalloon((filteredList.filter((movie)=> movie.title === clickedGift.target.nextSibling.textContent)))
  console.log(clickedGift)
}

console.log(filteredList)
console.log(allServices)
  
  return (
    <div className={toggleMode}>
      <Header
          handleToggleMode={handleToggleMode}
          toggleMode={toggleMode}
          filterMovies={filterMovies}
        />
      <div>
        <BalloonCollection
          moviesList={filteredList}
          popBalloon={popBalloon}
          selectedBalloon={selectedBalloon}
          toggleMode={toggleMode}
          returnToCollection={returnToCollection}
          keepGift={keepGift}
        />
        {filteredList.find(movie=>movie.saved) ?
        <WatchList 
          myMovies={filteredList.filter(movie=> movie.saved)}
          toggleMode={toggleMode}
          openMovieCard={openMovieCard} /> : <></>}
      </div>
    </div>
  );
}

export default App;