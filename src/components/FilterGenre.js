
function FilterGenre ({ toggleMode }) {

    return (
        <div>
            <select className={"filter"+toggleMode}>
                    <option value="All">Select Genre</option>
                    <option value="Netflix">Netflix</option>
                    <option value="Prime">Amazon Prime</option>
                    <option value="Disney">Disney</option>
                    <option value="HBO">HBO</option>
                    <option value="Hulu">Hulu</option>
            </select>
        </div>
    )
}

export default FilterGenre;
