
function FilterService ({ toggleMode, handleChange }) {

    return (
        <div>
            <select className={"filter"+toggleMode} onChange={handleChange}>
                <option value="All">Select Service Provider</option>
                <option value="Netflix">Netflix</option>
                <option value="Prime">Amazon Prime</option>
                <option value="Disney">Disney</option>
                <option value="HBO">HBO</option>
                <option value="Hulu">Hulu</option>
            </select>
        </div>
    )
}

export default FilterService;

