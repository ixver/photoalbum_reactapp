
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';

import { ThemeProvider } from "./Contexts"

import {UsersSection} from './Components/UsersSection'
import {AlbumsSection} from './Components/AlbumsSection'
import {PhotosSection} from './Components/PhotosSection'

function App() {

  console.count('APP')
  console.log('\n# APP renders')

  return (
    <ThemeProvider>
      <div className="app">

        <h1 className="apptitle">A Photo Album (in React)</h1>
        <div>
          <UsersSection/>
          <AlbumsSection/>
          <PhotosSection/>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
