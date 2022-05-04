import { useState, useEffect } from "react"

export const PhotosList = ({currentalbumid})=>{

  const [photos, setPhotos] = useState([]);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => {
      json && setPhotos(json.filter(el=>String(el.albumId)===String(currentalbumid)));
    })

  }, [currentalbumid])

  return (
    <div>
      {
        photos && photos.map((photo, i)=>{
          return (
            <img key={i} src={photo.thumbnailUrl} alt={photo.title}/>
          )
        })
      }
    </div>
  )
}

