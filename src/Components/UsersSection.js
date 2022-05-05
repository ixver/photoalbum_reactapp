import { memo } from "react"

import { UsersList } from "./UsersList"

const UsersSection = memo(function(){

  // console.count('USERSSECTION');
  // console.log('\n# USERSSECTION')

  return (

    <div>

      <h2 className="sectiontitle">Users</h2>
      <UsersList/>

    </div>

)
})

export {UsersSection}

