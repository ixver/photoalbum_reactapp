import { useState, useRef, useEffect, memo } from "react"

import { useAppState, useAppUpdate } from "../Contexts"
import { PhotosList } from "./PhotosList"
import { getDataStart } from "../Functions/Requests"

const PhotosSection = memo(()=>{
  let appData = useAppState();
  let setAppData = useAppUpdate();

  console.count('PHOTOSSECTION');
  console.log('# PHOTOSSECTION');

  const photosSectionRef = useRef();

  const [photos, setPhotos] = useState([]);

  useEffect(()=>{

    // PHOTOS DATA
    if ((appData.photos.length==0)&&(appData.currentalbumid)){

      const endpoint = 'https://jsonplaceholder.typicode.com/photos';
      getDataStart(endpoint)
      .then(result => {
        setAppData({...appData, photos: result})
        console.log(`PhotosData fetched`)
      })

    }

    setPhotos(appData.photos.filter(el=>String(el.albumId)===String(appData.currentalbumid)));

  }, [appData.currentalbumid, appData.photos.length])

  return (

    <div ref={photosSectionRef}>

      <h2 className="sectiontitle">Photos</h2>
      <PhotosList {...{photos}}/>

    </div>
  )
})

export {PhotosSection}
