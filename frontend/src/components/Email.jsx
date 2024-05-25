import React from 'react';

const Email = ({ email }) => {
  const options = {

  }

  const formattedDate = new Date(email.date).toLocaleDateString('it-IT', options); 

 return(
  <tr>
    <td>{email.sender}</td>
    <td>{email.recipient}</td>
    <td>{email.subject}</td>
    <td>{email.body}</td>
    <td>{formattedDate}</td>
  </tr>
 )
};

export default Email;