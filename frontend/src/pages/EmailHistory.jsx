import Email from '../components/Email';

const EmailHistory = ({emails}) => {
  return(
    <div className='container'>
      <h1>Email inviate</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Mittente</th>
            <th scope='col'>Desinatario</th>
            <th scope='col'>Oggetto</th>
            <th scope='col'>Contenuto</th>
            <th scope='col'>Allegato</th>
            <th scope='col'>Inviato</th>
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