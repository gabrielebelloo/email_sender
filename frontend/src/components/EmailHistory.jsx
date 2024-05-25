import {useState, useEffect} from 'react';
import api from '../api';
import Email from './Email';

const EmailHistory = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() =>{
    getEmails();
  }, [])
  
  const getEmails = () => {
    api
      .get('/api/') 
      .then((res) => res.data)
      .then((data) => setEmails(data))
      .catch((err) => console.log(err))
  };
  
  return(
    <div>
      <h2>Email inviate</h2>
      <table>
        <thead>
          <tr>
            <td>Mittente</td>
            <td>Desinatario</td>
            <td>Oggetto</td>
            <td>Contenuto</td>
            <td>Inviato</td>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => <Email email={email} key={email.id}/>)}
        </tbody>
      </table>
    </div>
  )
};

export default EmailHistory;