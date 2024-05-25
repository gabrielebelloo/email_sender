import {useState} from 'react';
import api from '../api';

const Form = ({ route }) => {
  const [sender, setSender] = useState('bellogabriele2001@gmail.com');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, {recipient, subject, body})
    } catch (error) {
      console.log(error)
    } finally { 
      setLoading(false)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Sender' value={sender} readOnly/>
      <input 
        type='text'
        placeholder='Destinatario'
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input 
        type='text'
        placeholder='Oggetto'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea 
        value={body}
        onChange={(e) => setBody(e.target.value)}
      >
      </textarea>
      <button type='submit'>Invia</button>
    </form>
  )
};

export default Form;