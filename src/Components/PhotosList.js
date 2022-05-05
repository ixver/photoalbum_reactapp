import { useState, useRef, useEffect, memo, useMemo, useCallback } from "react"

export const PhotosList = ({photos})=>{

  // console.count('PHOTOSLIST');
  console.log('\n# PHOTOSLIST');

  return (

    <div className="sectionlist photoslist">
      {

        photos && photos.length > 0 ? photos.map((photo, i)=>{
          return (
            <img key={i} src={photo.thumbnailUrl} alt={photo.title}/>
          )
        }) : 

        <>Choose a user and album</>

      }
    </div>

  )
}

