import React, { useEffect, useState } from 'react'
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import { UsersList } from '../UsersList/UsersList'
import axios from 'axios'



export const UsersStats = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [ipAdress, setIpAdress] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all books on initial render
  useEffect(() => {
    fetchUsers()
  }, [])

    const fetchUsers = async () => {
    axios
      .get('http://localhost:3000/users/all')
      .then(response => {
        setUsers(response.data)

        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the user list: ${error}`))
  }

  const userCreateRow = () => {
    // Send POST request to 'books/create' endpoint
    axios
      .post('http://localhost:3000/users/create', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        ipAdress: ipAdress
      })
      .then(res => {
        console.log(res.data)

        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchUsers()
      })
      .catch(error => console.error(`There was an error creating the ${title} book: ${error}`))
  }


    return (
    <div>
      < Header />
    
      <div className="user-list-wrapper">      
      
        <UsersList users={users} 
                   firstName={setFirstName}
                   lastName={setLastName}
                   email={email}
                   gender={gender}
                   ipAdress={ipAdress}
                    />

      </div>
    
      < Footer />

    </div>
    )
  }


