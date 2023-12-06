import React, { useState } from "react";

export const UserModal = ({ setUsers, showUserModal, users, setFilteredUsers, filteredUsers }) => {
    const [newUser, setNewUser] = useState({ name: "", email: "", phone: "", age: "" })
    const updateNewUser = (e, type) => {
        const value = e.target.value
        setNewUser({ ...newUser, [type]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setUsers([...users, newUser])
        setFilteredUsers([...filteredUsers, newUser])
        showUserModal()
    }

    return (
        <div className="modal">
            <input type="text" placeholder="username" onChange={(e) => updateNewUser(e, "name")} />
            <input type="email" placeholder="email" onChange={(e) => updateNewUser(e, "email")} />
            <input type="text" placeholder="phonenumber" onChange={(e) => updateNewUser(e, "phone")} />
            <input type="text" placeholder="age" onChange={(e) => updateNewUser(e, "age")} />
            <button onClick={showUserModal}>Cancel</button>
            <input type="submit" onClick={handleSubmit} />
        </div>
    )
}