import FilterService from './FilterService.js';
import ToggleFeature from './ToggleFeature.js';


function Header (props) {
const { handleToggleMode, toggleMode, netflix, prime, disney, hbo, hulu, allMovies, onServiceChange } = props

function handleToggleLogo () {
        if (toggleMode === "startLight") {
            return ("https://i.ibb.co/XSyLG4K/blacklogo.png");
        } else if (toggleMode === "light") {
            return ("https://i.ibb.co/XSyLG4K/blacklogo.png");
        } else {
            return ("https://i.ibb.co/XxMFPdy/whitelogo.png");
       }
      }
      

    return (
        <header className="header">
            <div className="filters">
                <FilterService 
                    toggleMode={toggleMode}
                    handleChange={onServiceChange}
                />
            </div>
            <div className="logo">
                <img className={"logoImage"+toggleMode} src={handleToggleLogo()} alt="Up in the Air Logo" />
            </div> 
            <ToggleFeature 
                handleToggleMode={handleToggleMode}
                toggleMode={toggleMode}
            />
        </header>
    )
}


export default Header;