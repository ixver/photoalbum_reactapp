import { useState, useEffect } from "react"

import { useAppState, useAppUpdate } from "../Contexts"
import { getDataStart } from "../Functions/Requests"

export const PhotosList = ()=>{

  // console.count('PHOTOSLIST');
  // console.log('\n# PHOTOSLIST');

  let appData = useAppState();
  let setAppData = useAppUpdate();

  const [photos, setPhotos] = useState([]);

  // PHOTOS DATA
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(()=>{

    if ((appData.photos.length===0)&&(appData.currentalbumid)){
      setIsLoading(true);
      setError(null);

      const endpoint = 'https://jsonplaceholder.typicode.com/photos';
      getDataStart(endpoint)
      .then(result => {
        setAppData({...appData, photos: result})
      }).then(()=>{
        setIsLoading(false);
        setError(null);
        console.log(`PhotosData fetched`)
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      });

    }

    setPhotos(appData.photos.filter(el=>String(el.albumId)===String(appData.currentalbumid)));

  }, [appData.currentalbumid, appData.photos.length])

  return (

    <div className="sectionlist photoslist">
      
      { isLoading && <>Loading...</> }
      { error && <>Error! {error.message}</> }
      { photos && photos.length > 0 ? photos.map((photo, i)=>{
          return (
            <img key={i} src={photo.thumbnailUrl} alt={photo.title}/>
          )
        }) : 

        <>Choose a user and album</>

      }

    </div>

  )
}

