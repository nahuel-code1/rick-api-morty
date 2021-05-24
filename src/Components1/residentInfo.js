import React from 'react'

export default function ResidentInfo ({residentData}) {
    let {name, origin, gender, status, episode, image} = residentData;
    
    return (
        <div className="card mb-3 bg-black">
            <img src={image} className="card-img-top" alt={name}></img>
            <div className="card-body">
                <h3 className="card-title">Name:    {name} </h3>
                <p className="card-text">  Origin:  {origin.name} </p>
                <p className="card-text">  gender:  {gender} </p>
                <p className="card-text">  Status:  {status} </p>
                <p className="card-text">  Episode: {episode.length} </p>
            </div>
        </div>
    )
}
