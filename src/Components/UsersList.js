import { useState, useEffect } from "react"

export const UsersList = ({currentuserid, setCurrentUserId, currentalbumid, setCurrentAlbumId})=>{

  const [users, setUsers] = useState([]);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      json && setUsers(json);
    })

  }, [])

  const handleClick = (e) => {
    setCurrentUserId(e.currentTarget.value);
    currentalbumid && setCurrentAlbumId()
  }

  return (

    <div>

      <h2 className="sectiontitle">Users</h2>

      <div className="userslist">
        {
          users && users.map((user, i)=>{
            return (
                <button key={i} value={user.id} className={currentuserid && String(user.id)===String(currentuserid) ? "itemSelected" : 0} onClick={e=>handleClick(e)}>
                  {user.name}
                </button>
            )
          })
        }
      </div>

    </div>

)
}

