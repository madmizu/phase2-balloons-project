import FilterService from './FilterService.js';
import FilterGenre from './FilterGenre.js';
import ToggleFeature from './ToggleFeature.js';


function Header (props) {
const { handleToggleMode, toggleMode } = props

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
                />
                <FilterGenre 
                    toggleMode={toggleMode}
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