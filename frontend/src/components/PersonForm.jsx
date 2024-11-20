const PersonForm = ({ handleOnSubmit, handleOnChangeName, handleOnChangeNumber, newName, newNumber }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        name: <input value={newName} onChange={handleOnChangeName} data-testid='newName'/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleOnChangeNumber} data-testid='newNumber'/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm