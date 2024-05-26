import Email from '../components/Email';

const EmailHistory = ({emails, onDelete}) => {
  return(
    <div className='container'>
      <h1>Email inviate</h1>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Desinatario</th>
              <th scope='col'>Oggetto</th>
              <th scope='col'>Contenuto</th>
              <th scope='col'>Allegato</th>
              <th scope='col'>Inviato</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => <Email email={email} onDelete={onDelete} key={email.id}/>)}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default EmailHistory;