import React from 'react'
import PropTypes from 'prop-types';

import { User } from '../User/User'


export const UsersList = (props) => {
  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" />

            <th className="table-head-item">First Name</th>

            <th className="table-head-item">Last Name</th>

            <th className="table-head-item">Email</th>

            <th className="table-head-item">Gender</th>

            <th className="table-head-item">IP Adress</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {props.users.length > 0 ? (
            props.userss.map((el, id, index) => (
              <User
                key={id}
                user={el}
                position={index + 1}
                handleUserRemove={props.handleUserRemove}
              />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no users to show.</td>
            </tr>
          )
        }
        </tbody>
    </table>
  )
}

UsersList.propTypes = {
     modalHeader: PropTypes.string.isRequired,
     id: PropTypes.number.isRequired,
     firstName: PropTypes.string.isRequired,
     lastName: PropTypes.string.isRequired,
     email: PropTypes.string.isRequired,
     gender: PropTypes.string.isRequired,
     ipAdres: PropTypes.number.isRequired
}