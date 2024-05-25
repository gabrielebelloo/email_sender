import Form from './components/Form';
import EmailHistory from './components/EmailHistory';

const App = () => {
  return (
    <>
      <h1>Invia un'email</h1>
      <Form route='/api/'/>
      <EmailHistory />
    </>
  )
}

export default App;
