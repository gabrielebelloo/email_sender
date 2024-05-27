const Email = ({ email, onDelete }) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };

  const formattedDate = new Date(email.date).toLocaleDateString('it-IT', options); 

  const attachment = email.attachment;
  const baseUrl = import.meta.env.VITE_API_URL;
  const pathUrl = import.meta.env.VITE_FILE_PATH_DIRECTORY;
  const fullString = baseUrl + '/' + pathUrl ;
  const fileName = attachment ? (email.attachment).replace(fullString, '') : '';

 return(
  <tr>
    <td>{email.recipient}</td>
    <td className='col-2'>{email.subject}</td>
    <td className='col-5'>{email.body}</td>
    <td className='col-2'>{fileName}</td> 
    <td>{formattedDate}</td>
    <td><button className='btn' onClick={() => {onDelete(email.id)}}>X</button></td>
  </tr>
 )
};

export default Email;