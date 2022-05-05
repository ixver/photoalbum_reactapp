import { useState, useRef, useEffect, memo, useMemo, useCallback } from "react"

export const UsersList = ({users, currentuserid, handleClick})=>{

  // console.count('USERSLIST');
  console.log('\n# USERSLIST');

  return (

    <div className="sectionlist userslist">
      {
        users && users.length>0 && users.map((user, i)=>{
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

