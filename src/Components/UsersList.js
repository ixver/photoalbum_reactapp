import { useState, useEffect } from "react"

import { useAppState, useAppUpdate } from "../Contexts"
import { getDataStart } from "../Functions/Requests"

export const UsersList = ()=>{

  // console.count('USERSLIST');
  // console.log('\n# USERSLIST');

  let appData = useAppState();
  let setAppData = useAppUpdate();

  let {users, currentuserid} = appData;

  // USERS DATA
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(()=>{

    if (appData.users.length===0){
      setIsLoading(true);
      setError(null);

      const endpoint = 'https://jsonplaceholder.typicode.com/users';
      getDataStart(endpoint)
      .then(result => {
        setAppData({...appData, users: result})
      }).then(()=>{
        setIsLoading(false);
        setError(null);
        console.log('UsersData fetched')
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      });

    }

  }, [appData.users.length])

  const handleClick = (e) => {

    setAppData({...appData, currentuserid: e.currentTarget.value, currentalbumid: undefined});

    console.log('\n * CLICK handled *')

  }

  return (

    <div className="sectionlist userslist">

      { isLoading && <>Loading...</> }
      { error && <>Error! {error.message}</> }
      { users && users.length>0 && users.map((user, i)=>{
          return (
              <button key={i} value={user.id} className={currentuserid && String(user.id)===String(currentuserid) ? "itemSelected" : ''} onClick={e=>handleClick(e)}>
                {user.name}
              </button>
          )
        })
      }

    </div>

  )
}

