import Form from './components/Form';
import EmailHistory from './components/EmailHistory';
import {useState, useEffect} from 'react';
import api from './api';

const App = () => {
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
      const res = await api.post('/api/', {
        recipient: email.recipient,
        subject: email.subject, 
        body: email.body
      });
    } catch (error) {
      console.log(error)
    } finally { 
      resetComponent(); 
      getEmails();
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

  return (
    <>
      <h1>Invia un'email</h1>
      <Form email={email} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <EmailHistory emails={emails} />
    </>
  )
}

export default App;
