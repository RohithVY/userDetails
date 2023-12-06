import React, { useState, useEffect } from 'react'
import UserCard from './UserCard'

const ColumnContainer = ({ minage, maxage, users, handleDeleteUser }) => {
    const [currentList, setCurrentList] = useState([])
    const [sorted, setSorted] = useState(true)

    const handleSorting = () => {
        setSorted(sorted => !sorted)
    }
    useEffect(() => {
        console.log("called")
        const filtered = users.filter(eachUser => parseInt(eachUser.age) >= parseInt(minage) && parseInt(eachUser.age) <= parseInt(maxage))
        sorted ? setCurrentList(filtered.sort((a, b) =>
            a.name > b.name ? 1 : -1)) : setCurrentList(filtered.sort((a, b) =>
                a.name > b.name ? -1 : 1))
    }, [users, sorted])

    if (!currentList.length) return (
        <section className='column'>
            <h3>Users between ages {minage} and {maxage}</h3>
            <p>No users exist in this range</p>
        </section>
    )

    return (
        <section className='column'>
            <h3>Users between ages {minage} and {maxage}</h3>
            <div className='sort__container'>
                <button onClick={handleSorting}>Sorted in : </button>
                <p>{sorted ? "Ascending order" : "Descending order"}</p>
            </div>
            <div>{currentList.length && currentList.map((eachItem) => <UserCard user={eachItem} key={Date.now() + parseInt(Math.random() * 1000)} handleDeleteUser={handleDeleteUser}/>)}</div>
        </section>
    )
}

export default ColumnContainer