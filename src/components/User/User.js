import React from 'react'


export const User = (props) => {
  return (
    <tr className="user-row">
      <td className="table-item">
        {props.position}
      </td>

      <td className="table-item">
        {props.user.firstName}
      </td>

      <td className="table-item">
        {props.user.lastName}
      </td>

      <td className="table-item">
        {props.user.email}
      </td>

      <td className="table-item">
        {props.user.gender}
      </td>

      <td className="table-item">
        {props.user.ipAdress}
      </td>
     
    </tr>
  );
}