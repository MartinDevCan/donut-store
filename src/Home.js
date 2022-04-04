import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Donuts from "./Donuts";

function Home() {
const [donuts,setDonuts] = useState(data);
const chosenDonuts = (search) => {
const newDonuts = data.filter(element => element.search === search);
setDonuts(newDonuts);
}
return(
<div>
<Buttons filteredDonuts={chosenDonuts}/>
<Donuts itemsForSale={donuts}/>
</div>
)
}
export default Home;