import { useState, useRef, useEffect, memo, useMemo, useCallback } from "react"

export const AlbumsList = ({albums, currentalbumid, handleClick})=>{

  // console.count('ALBUMSLIST');
  console.log('\n# ALBUMSLIST');

  return (

    <div className="sectionlist albumslist">

      {
        albums && albums.length>0 ? albums.map((album, i)=>{
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

