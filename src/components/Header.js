import FilterService from './FilterService.js';
import ToggleFeature from './ToggleFeature.js';


function Header (props) {
const { handleToggleMode, toggleMode, onServiceChange } = props

function handleToggleLogo () {
        if (toggleMode === "dark") {
            return ("https://i.ibb.co/XxMFPdy/whitelogo.png");
        } else {
            return ("https://i.ibb.co/XSyLG4K/blacklogo.png");
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