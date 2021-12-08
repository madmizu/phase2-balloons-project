import './App.css';
import { useState } from'react';
import Header from './components/Header.js';
import BalloonCollection from './components/BalloonCollection.js';
import BalloonGifts from './components/BalloonGifts.js';
import WatchList from './components/WatchList.js';

import NetflixArray from './temporary/NetflixArray.js'
import PrimeArray from './temporary/PrimeArray.js'
import DisneyArray from './temporary/DisneyArray.js'
import HboArray from './temporary/HboArray.js'
import HuluArray from './temporary/HuluArray.js'
import GenresArray from './temporary/GenresArray.js'

function App() {
  // useEffect(()=>{
  // // Fetch API for Netflix & set 'netflix' state to the data returned
  //   fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=5&page=1&output_language=en&language=en", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  //       "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
  //   }
  // })
  //   .then(response => response.json())
  //   .then(json=>setNetflix(json))
  // // Fetch API for Amazon Prime & set 'prime' state to the data returned
  //   fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=prime&type=movie&genre=5&page=1&output_language=en&language=en", {
	//     "method": "GET",
	//     "headers": {
	// 	    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
	// 	    "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
	//     }
  //   })
  //   .then(response => response.json())
  //   .then(json=>setPrime(json))
  // // Fetch API for DisneyPlus & set 'disney' state to the data returned
  //   fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=disney&type=movie&genre=5&page=1&output_language=en&language=en", {
	//     "method": "GET",
	//     "headers": {
	// 	    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
	// 	    "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
	//     }
  //   })
  //   .then(response => response.json())
  //   .then(json=>setDisney(json))
  // // Fetch API for HBO & set 'hbo' state to the data returned
  //   fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hbo&type=movie&genre=5&page=1&output_language=en&language=en", {
	//     "method": "GET",
	//     "headers": {
	// 	    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
	// 	    "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
	//     }
  //   })
  //   .then(response => response.json())
  //   .then(json=>setHbo(json))
  // // Fetch API for Hulu & set 'hulu' state to the data returned
  //   fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hulu&type=movie&genre=5&page=1&output_language=en&language=en", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  //       "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json=>setHulu(json))

  // // Fetch API for genres & set 'genres' state to the data returned
  //   fetch("https://streaming-availability.p.rapidapi.com/genres", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  //       "x-rapidapi-key": "f8bf12cd32mshe0ec1c6209f8a0cp196ab6jsn50e0a81fb28a"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json=>setGenres(json))
  //   .catch(err =>console.error(err));
  // }, []);

  // const [netflix, setNetflix] = useState ([].map(item=> item.results));
  // const [prime, setPrime] = useState ([].map(item=> item.results));
  // const [disney, setDisney] = useState ([].map(item=> item.results));
  // const [hbo, setHbo] = useState ([].map(item=> item.results));
  // const [hulu, setHulu] = useState ([].map(item=> item.results));
  const [genres, setGenres] = useState ([GenresArray]);
  const [toggleMode, setToggleMode] = useState ("startLight");
  const [selectedCategory, setSelectedCategory] = useState("NeedsSelect")
  const [allData, setAllData] = useState(
          [...([NetflixArray].map(item=> item.results))[0],...([PrimeArray].map(item=> item.results))[0],...([DisneyArray].map(item=> item.results))[0],...([HboArray].map(item=> item.results))[0],...([HuluArray].map(item=> item.results))[0]]);

 console.log(genres);
 console.log(allData)

function popBalloon() {
 console.log("pop")
}

  function handleToggleMode () {
    if (toggleMode === "startLight") {
      setToggleMode("dark");
    } else if (toggleMode === "light") {
      setToggleMode("dark");
    } else {
      setToggleMode("light")
   }
  }

  function handleCategoryChange (event) {
    setSelectedCategory(event.target.value)
    console.log(selectedCategory);
  }
  
  return (
    <div className={toggleMode}>
      <Header
          handleToggleMode={handleToggleMode}
          toggleMode={toggleMode}
          onCategoryChange={handleCategoryChange}
        />
      <div>
        <BalloonCollection
          popBalloon={popBalloon}
        />
        <WatchList />
      </div>
    </div>
  );
}

export default App;