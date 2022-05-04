
import { useState, useEffect } from 'react';

import {UsersList} from './Components/UsersList'
import {AlbumsList} from './Components/AlbumsList'

function App() {

  const [currentuserid, setCurrentUserId] = useState();
  const [currentalbumid, setCurrentAlbumId] = useState();

  useEffect(()=>{
    console.log(currentuserid);
    console.log(currentalbumid);
  })

  return (
    <div className="App">
      <header className="App-header">
        A Photo Album (in React)
      </header>

      <div>
        <UsersList {...{setCurrentUserId}}/>
        <AlbumsList {...{currentuserid, setCurrentAlbumId}}/>
      </div>

    </div>
  );
}

export default App;
