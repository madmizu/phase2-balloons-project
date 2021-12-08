
function ToggleFeature (props) {
    const { handleToggleMode, toggleMode } = props

    return (
        <button className={"button"+toggleMode}
            onClick={handleToggleMode}>
            { toggleMode === "light" || "startLight" ? "Nighttime" : "Daytime"}
        </button>
    )
}

export default ToggleFeature;