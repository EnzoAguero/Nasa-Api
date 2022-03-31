import React, { useEffect, useState } from 'react'
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_KEY


export default function NasaPhoto() {
    
    const [photoData,setPhotoData] = useState(null)

    useEffect(() => {
        fetchPhoto()

        async function fetchPhoto(){
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            const data = await res.json()
            setPhotoData(data) //seteamos el estado con la data que me viene con el fetch
            console.log(data);
        }
    },[])

    if(!photoData) return <div><p>no hay nada pa</p></div>

    return (
        <div>
             <div className='container'>
            {photoData.media_type === "image" ? (<img src={photoData.url} 
            alt={photoData.title}
            className="nasa-photo"
            />) : (<iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className='photo'
            />)}
            
            <div className='data-photo'>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>

            
            
        </div>
        <NavBar />
        </div>
       
       
    )
    
}