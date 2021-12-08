import './App.css';
import { useState } from'react';
import Header from './components/Header.js';
import BalloonGifts from './components/BalloonGifts.js';
import WatchList from './components/WatchList.js';

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

  // const [netflix, setNetflix] = useState ([]);
  // const [prime, setPrime] = useState ([]);
  // const [disney, setDisney] = useState ([]);
  // const [hbo, setHbo] = useState ([]);
  // const [hulu, setHulu] = useState ([]);
  // const [genres, setGenres] = useState ([]);
  const [toggleMode, setToggleMode] = useState ("startLight");

//  console.log(netflix);
//  console.log(prime);
//  console.log(disney);
//  console.log(hbo);
//  console.log(hulu);
//  console.log(genres);

function popBalloon() {

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

  

  return (
    <div className={toggleMode}>
      <Header
          handleToggleMode={handleToggleMode}
          toggleMode={toggleMode}
        />
      <div>
        <BalloonGifts popBalloon={popBalloon}/>
        <WatchList />
      </div>
    </div>
  );
}

export default App;
