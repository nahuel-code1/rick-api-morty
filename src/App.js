import { useState } from "react";
import SearchBox1 from "./Components1/searchBox";
import LocationContainer1 from "./Components1/locationContainer";
import "./components.css";
function App () {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = (dataInput) => {
        setInputValue(dataInput);
    }

    return (
        <div className="Container">
            <h1>Rick and Morty API</h1>
            <SearchBox1 inputMethod={handleSearch}/>
            {inputValue && <LocationContainer1 inputData={inputValue}/>}
        </div>
    )
}

export default App;