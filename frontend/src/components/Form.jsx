const Form = ({ email, handleChange, handleSubmit }) => {
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