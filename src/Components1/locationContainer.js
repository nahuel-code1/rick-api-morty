import React, { useEffect, useState } from 'react';
import LocationInfo from "./locationInfo";
import ResidentsContainer from "./residentContainer";
import {getGeneralInfo} from "../services1/api";

export default function LocationContainer1 ({inputData}) {
    const [locationInfo, setLocationInfo] = useState(false);
    const [residentsInfo, setResidentsInfo] = useState([]);

    useEffect(() => {
        if (inputData) {
            let promise = getGeneralInfo(inputData);

            promise.then((response) => {
                setLocationInfo(response.data);
                setResidentsInfo(response.data.residents);
                console.log(locationInfo);
                console.log(residentsInfo);
            })
        }

    }, [inputData])

    return (
        <div className="loc-container">
            {locationInfo && <LocationInfo locationData={locationInfo} />}
            {residentsInfo.map((elementUrl) => (
                <ResidentsContainer  key={elementUrl.split("https://rickandmortyapi.com/api/character/")[1]} dataUrl={elementUrl} />
            ))}
        </div>
    )
}
