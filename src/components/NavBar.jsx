import React, { useEffect, useState } from 'react'

const NavBar = ({ showUserModal, setFilteredUsers, users }) => {
  const [searchText, setSearchText] = useState("")

  const handleFilteredUsers = () => {
    if (searchText === "") {
      setFilteredUsers(users)
      return
    }
    setFilteredUsers(users.filter(eachUser => eachUser.name.toLowerCase().includes(searchText.toLowerCase())))
  }

  const handleSearchValueChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    handleFilteredUsers()
  }, [searchText])

  return (
    <div className='navbar'>
      <input placeholder='Enter Search Name Value' type='text' onChange={handleSearchValueChange} />
      <button onClick={showUserModal}>Add New User</button>
    </div>
  )
}

export default NavBar