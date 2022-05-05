import { useRef, useEffect, memo, useCallback } from "react"

import { useAppState, useAppUpdate } from "../Contexts"
import { UsersList } from "./UsersList"
import { getDataStart } from "../Functions/Requests"

const UsersSection = memo(function(){
  let appData = useAppState();
  let setAppData = useAppUpdate();

  console.count('USERSSECTION');
  console.log('\n# USERSSECTION')

  const usersSectionRef = useRef();

  useEffect(()=>{

    // USERS DATA
    if (appData.users.length==0){

      const endpoint = 'https://jsonplaceholder.typicode.com/users';
      getDataStart(endpoint)
      .then(result => {
        setAppData({...appData, users: result})
      }).then(()=>{
        console.log('UsersData fetched')
      })

    }
  }, [appData.users.length])

  const handleClick = useCallback((e) => {

    setAppData({...appData, currentuserid: e.currentTarget.value, currentalbumid: undefined});

    console.log('\n * CLICK handled *')

  })

  return (

    <div ref={usersSectionRef}>

      <h2 className="sectiontitle">Users</h2>
      <UsersList {...{users:appData.users, currentuserid:appData.currentuserid, handleClick }}/>

    </div>

)
})

export {UsersSection}

