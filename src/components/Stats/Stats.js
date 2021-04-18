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

        fetchUsers()
      })
      .catch(error => console.error(`There was an error creating the ${firstName} user: ${error}`))
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


