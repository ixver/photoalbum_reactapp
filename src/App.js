
import { useState, useEffect } from 'react';

import {UsersList} from './Components/UsersList'
import {AlbumsList} from './Components/AlbumsList'
import {PhotosList} from './Components/PhotosList'

function App() {

  const [currentuserid, setCurrentUserId] = useState();
  const [currentalbumid, setCurrentAlbumId] = useState();

  useEffect(()=>{
    console.log(`current id: ${currentuserid}`);
    console.log(`current album: ${currentalbumid}`);
  })

  return (
    <div className="app">
      <h1 className="apptitle">
        A Photo Album (in React)
      </h1>

      <div>
        <UsersList {...{setCurrentUserId}}/>
        <AlbumsList {...{currentuserid, setCurrentAlbumId}}/>
        <PhotosList {...{currentalbumid}}/>
      </div>

    </div>
  );
}

export default App;
