import Form from './pages/Form';
import EmailHistory from './pages/EmailHistory';
import Navbar from './components/Navbar';
import {useState, useEffect} from 'react';
import api from './api';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
    sender: import.meta.env.VITE_EMAIL_HOST_USER,
    recipient: '',
    subject: '',
    body: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email.recipient) {
      alert('Devi inserire un destinatario!')
      return
    } else if (!email.body) {
      alert('Devi inserire del contenuto!')
      return
    }

    const file = document.querySelector('#attachment').files
    try {
      const res = await api.post('/api/', {
        recipient: email.recipient,
        subject: email.subject, 
        body: email.body,
        attachment: file[0]
      }, {  
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      console.log(error)
    } finally { 
      resetComponent(); 
      setLoading(false);
      alert('Email inviata!');
    }
    getEmails();
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
      sender: import.meta.env.VITE_EMAIL_HOST_USER,
      recipient: '',
      subject: '',
      body: ''
    });
  }

  const deleteNote = (id) => {
    try {
      api.delete(`/api/delete/${id}/`);
    } catch (error) {
      console.log(error)
    } finally { 
      alert('Email eliminata!');
    }
    getEmails(); 
  }

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Form email={email} handleChange={handleChange} handleSubmit={handleSubmit}/>
            }
          />
          <Route
            path='/emails'
            element={
              <EmailHistory emails={emails} onDelete={deleteNote}/>
            }
          />
          <Route
            path='*'
            element={
              <Form email={email} handleChange={handleChange} handleSubmit={handleSubmit}/>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
