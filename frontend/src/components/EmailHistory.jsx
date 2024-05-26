import Email from './Email';

const EmailHistory = ({emails}) => {
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
            <td>Allegato</td>
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