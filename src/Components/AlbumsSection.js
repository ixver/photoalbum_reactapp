import { memo } from "react"

import { AlbumsList } from "./AlbumsList"

const AlbumsSection = memo(function(){

  // console.count('ALBUMSSECTION');
  // console.log('\n# ALBUMSSECTION');

  return (

    <div>

      <h2 className="sectiontitle">Albums</h2>
      <AlbumsList />

    </div>
  )
})

export {AlbumsSection}

