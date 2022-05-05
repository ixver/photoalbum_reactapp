
import { createContext, useContext, useState , memo } from 'react';

export const AppStateContext = createContext();
export const AppUpdateContext = createContext();

export const useAppState = () => {
    return useContext(AppStateContext);
}
export const useAppUpdate = () => {
    return useContext(AppUpdateContext);
}

export const ThemeProvider = memo(({children}) => {
    const [appData, setAppData] = useState({
      users: [],
      albums: [],
      photos: [],
      currentuserid: undefined,
      currentalbumid: undefined,
    })

    return (
        <AppStateContext.Provider value={appData}>
            <AppUpdateContext.Provider value={setAppData}>
                {children}
            </AppUpdateContext.Provider>
        </AppStateContext.Provider>
    )

})