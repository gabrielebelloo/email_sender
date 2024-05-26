const Email = ({ email }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  }

  const formattedDate = new Date(email.date).toLocaleDateString('it-IT', options); 

  const attachment = email.attachment
  const baseUrl = import.meta.env.VITE_API_URL
  const pathUrl = import.meta.env.VITE_FILE_PATH_DIRECTORY
  const fullString = baseUrl + '/' + pathUrl 
  const fileName = attachment ? (email.attachment).replace(fullString, '') : ''

 return(
  <tr>
    <td>{email.sender}</td>
    <td>{email.recipient}</td>
    <td>{email.subject}</td>
    <td>{email.body}</td>
    <td>{fileName}</td>
    <td>{formattedDate}</td>
  </tr>
 )
};

export default Email;