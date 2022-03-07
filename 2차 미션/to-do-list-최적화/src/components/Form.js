import React from 'react'

export default function Form({value, setValue, addClick}) {
  
  const printClick = (e) => {
    setValue(e.target.value);
  }
  return (
    <div>
      <form style={{display: "flex", marginTop: "10px"}} onSubmit={addClick}>
            <input 
              type = "text"
              name = "value"
              style = {{ flex: "15", padding: "5px", border: "none"}}
              placeholder = "HEY, what you gonna do?"
              fontFamily = "font-family: 'Hahmlet', serif;"
              value = {value}
              onChange={printClick}/>
              <input 
              type = "submit"
              value = "➕"
              className = "submitBtn"
              style = {{flex: 1, marginLeft:"2px", backgroundColor: "gold", borderRadius: "5px", border: "none", cursor: "pointer"}}/>
          </form>
    </div>
  )
}
