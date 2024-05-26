import {useState} from 'react';
import api from '../api';

const Form = ({ route }) => {
  const [email, setEmail] = useState({
    sender: 'bellogabriele2001@gmail.com',
    recipient: '',
    subject: '',
    body: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, {
        recipient: email.recipient,
        subject: email.subject, 
        body: email.body
      });
    } catch (error) {
      console.log(error)
    } finally { 
      resetComponent();
      setLoading(false)
      alert('Email inviata!')
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmail({
      ...email,
      [name]: value
    });
  }

  const resetComponent = () => {
    setEmail({
      sender: 'bellogabriele2001@gmail.com',
      recipient: '',
      subject: '',
      body: ''
    });
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Mittente' value={email.sender} readOnly/>
      <input 
        name='recipient'  
        type='text'
        placeholder='Destinatario'
        value={email.recipient}
        onChange={(e) => handleChange(e)}
      />
      <input 
        name='subject'
        type='text'
        placeholder='Oggetto'
        value={email.subject}
        onChange={(e) => handleChange(e)}
      />
      <textarea 
        name='body'
        value={email.body}
        onChange={(e) => handleChange(e)}
      >
      </textarea>
      <button type='submit'>Invia</button>
    </form>
  )
};

export default Form;