import { memo } from "react"

import { PhotosList } from "./PhotosList"

const PhotosSection = memo(function(){

  // console.count('PHOTOSSECTION');
  // console.log('# PHOTOSSECTION');

  return (

    <div>

      <h2 className="sectiontitle">Photos</h2>
      <PhotosList/>

    </div>
  )
})

export {PhotosSection}
