const Form = ({ email, handleChange, handleSubmit }) => {
  return(
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='sender'>Mittente</label>
        <input
          className='form-control'
          type='text'
          placeholder='Mittente'
          value={email.sender}
          readOnly
        />
      </div>
      <div className='form-group'>
        <label htmlFor='recipient'>Destinatario</label>
        <input 
          className='form-control'
          name='recipient'  
          type='text'
          placeholder='Destinatario'
          value={email.recipient}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='subject'>Oggetto</label>
        <input 
          className='form-control'
          name='subject'
          type='text'
          placeholder='Oggetto'
          value={email.subject}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='body'>Contenuto</label>
        <textarea 
          className='form-control'
          name='body'
          value={email.body}
          onChange={(e) => handleChange(e)}
        >
        </textarea>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          name='attachment'
          type='file'
          id='attachment'
        />
      </div>
      <button class='btn btn-primary' type='submit'>Invia</button>
    </form>
  )
};

export default Form;