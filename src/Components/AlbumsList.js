import { useState, useEffect } from "react"

export const AlbumsList = ({currentuserid, currentalbumid, setCurrentAlbumId})=>{

  const [albums, setAlbums] = useState([]);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => {
      json && setAlbums(json.filter(el=>String(el.userId)===String(currentuserid)));
    })

  }, [currentuserid])

  return (

    <div>
      <h2 className="sectiontitle">Albums</h2>

      <div className="albumslist">
        {
          albums && albums.length>0 ? albums.map((album, i)=>{
            return (
              <button key={i} value={album.id} className={currentalbumid && String(album.id)===String(currentalbumid) ? "itemSelected" : 0} onClick={e=>{setCurrentAlbumId(e.currentTarget.value)}}>
                {album.title}
              </button>
            )
          }) : <>Choose a user</>
        }
      </div>

    </div>
  )
}

