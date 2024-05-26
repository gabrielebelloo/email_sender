import Email from './Email';

const EmailHistory = ({emails}) => {
  return(
    <div>
      <h2>Email inviate</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Mittente</th>
            <th scope='col'>Desinatari</th>
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