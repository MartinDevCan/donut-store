function Buttons({filteredDonuts}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredDonuts("berries")}>Berries</button>
            <button className="change" onClick={() => filteredDonuts("chocolate")}>Chocolate</button>
            <button className="change" onClick={() => filteredDonuts("matcha")}>Matcha</button>
            <button className="change" onClick={() => filteredDonuts("nuts")}>Nuts</button>
            <button className="change" onClick={() => filteredDonuts("sprinkles")}>Sprinkles</button>
            <button className="change" onClick={() => filteredDonuts("vanilla")}>Vanilla</button>
        </div>
    )
}
export default Buttons;