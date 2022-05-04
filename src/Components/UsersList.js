import { useState, useEffect } from "react"

export const UsersList = ({setCurrentUserId})=>{

  const [users, setUsers] = useState([]);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      json && setUsers(json);
    })

  }, [])

  return (

    <div>

      <h2 className="sectiontitle">Users</h2>

      <div className="userslist">
        {
          users && users.map((user, i)=>{
            return (
              <button key={i} value={user.id} onClick={e=>{setCurrentUserId(e.currentTarget.value)}}>
                {user.name}
              </button>
            )
          })
        }
      </div>

    </div>

)
}

