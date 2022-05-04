import { useState, useEffect } from "react"

export const AlbumsList = ({currentuserid, setCurrentAlbumId})=>{

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
      {
        albums && albums.map((album, i)=>{
          return (
            <button key={i} value={album.id} onClick={e=>{setCurrentAlbumId(e.currentTarget.value)}}>
              {album.title}
            </button>
          )
        })
      }
    </div>
  )
}

