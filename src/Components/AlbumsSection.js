import { useState, useRef, useEffect, memo } from "react"

import { useAppState, useAppUpdate } from "../Contexts"
import { AlbumsList } from "./AlbumsList"
import { getDataStart } from "../Functions/Requests"

const AlbumsSection = memo(function (){

  let appData = useAppState();
  let setAppData = useAppUpdate();

  console.count('ALBUMSSECTION');
  console.log('\n# ALBUMSSECTION');

  const albumsSectionRef = useRef();

  const [albums, setAlbums] = useState([]);

  useEffect(()=>{

    // ALBUMS DATA
    if ((appData.albums.length==0)&&(appData.currentuserid)){

      const endpoint = 'https://jsonplaceholder.typicode.com/albums';
      getDataStart(endpoint)
      .then(result => {
        setAppData({...appData, albums: result})
        console.log(`AlbumsData fetched`)
      })

    }

    setAlbums(appData.albums.filter(el=>String(el.userId)===String(appData.currentuserid)));

  }, [appData.albums.length, appData.currentuserid])

  const handleClick = (e) => {

    setAppData({...appData, currentalbumid: e.currentTarget.value});

    console.log('\n * CLICK handled *')

  }

  return (

    <div ref={albumsSectionRef}>

      <h2 className="sectiontitle">Albums</h2>
      <AlbumsList {...{albums, currentalbumid:appData.currentalbumid, handleClick }}/>

    </div>
  )
})

export {AlbumsSection}

