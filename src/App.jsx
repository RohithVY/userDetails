import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { UserModal } from './components/UserModal'
import ColumnContainer from './components/ColumnContainer'
function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([{ name: "Rohith", email: "venkatrohith98@gmail.com", phone: "9885445987", age: "25" }])

  const [filteredUsers, setFilteredUsers] = useState([{ name: "Rohith", email: "venkatrohith98@gmail.com", phone: "9885445987", age: "25" }])


  const showUserModal = () => {
    setShowModal((showModal) => !showModal)
  }

  const handleDeleteUser = (userName) => {
    setUsers(users.filter(user => user.name !== userName))
    setFilteredUsers(filteredUsers.filter(user => user.name !== userName))
  }


  return (
    <div className='parent__container'>
      <NavBar showUserModal={showUserModal} setFilteredUsers={setFilteredUsers} users={users} />
      {showModal && <UserModal setUsers={setUsers} showUserModal={showUserModal} users={users} setFilteredUsers={setFilteredUsers} filteredUsers={filteredUsers} />}
      <div className='col__wrapper'>
        <ColumnContainer minage={1} maxage={18} users={filteredUsers} handleDeleteUser={handleDeleteUser} />
        <ColumnContainer minage={19} maxage={25} users={filteredUsers} handleDeleteUser={handleDeleteUser} />
        <ColumnContainer minage={26} maxage={45} users={filteredUsers} handleDeleteUser={handleDeleteUser} />
        <ColumnContainer minage={45} maxage={100} users={filteredUsers} handleDeleteUser={handleDeleteUser} />
      </div>
    </div>
  )
}

export default App
