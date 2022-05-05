import { useState, useEffect } from "react"

import { useAppState, useAppUpdate } from "../Contexts"
import { getDataStart } from "../Functions/Requests"

export const AlbumsList = ()=>{

  // console.count('ALBUMSLIST');
  // console.log('\n# ALBUMSLIST');

  let appData = useAppState();
  let setAppData = useAppUpdate();
  let {currentalbumid} = appData;

  const [albums, setAlbums] = useState([]);

  // ALBUMS DATA
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(()=>{

    if ((appData.albums.length===0)&&(appData.currentuserid)){
      setIsLoading(true);
      setError(null);

      const endpoint = 'https://jsonplaceholder.typicode.com/albums';
      getDataStart(endpoint)
      .then(result => {
        setAppData({...appData, albums: result})
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

    setAlbums(appData.albums.filter(el=>String(el.userId)===String(appData.currentuserid)));

  }, [appData.albums.length, appData.currentuserid])

  const handleClick = (e) => {

    setAppData({...appData, currentalbumid: e.currentTarget.value});

    console.log('\n * CLICK handled *')

  }

  return (

    <div className="sectionlist albumslist">

      { isLoading && <>Loading...</> }
      { error && <>Error! {error.message}</> }
      { albums && albums.length>0 ? albums.map((album, i)=>{
          return (
            <button key={i} value={album.id} className={currentalbumid && String(album.id)===String(currentalbumid) ? "itemSelected" : 0} onClick={e=>handleClick(e)}>
              {album.title}
            </button>
          )
        }) : <>Choose a user</>
      }

    </div>

  )
}

