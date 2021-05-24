import {useForm} from "react-hook-form";
import "../components.css";

function SearchBox1 ({inputMethod}) {
const {register, handleSubmit, reset} = useForm();

const getInputId = (data) => {
    inputMethod(data.locationId);
    reset({
        locationId: ""
    });
}

return (
    <div className="search-box">
        <form onSubmit={handleSubmit(getInputId)} className="d-flex flex-column">
            <input 
            type="number"
            placeholder="Colocar el id para el planeta deseado"
            {...register("locationId", {min:0})}
            />
            <button className="btn btn-outline-info mt-3">Search</button>
        </form>
    </div>
);
}

export default SearchBox1;