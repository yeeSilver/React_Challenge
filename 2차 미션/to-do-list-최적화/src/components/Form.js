import React from 'react'

export default function Form({value, setValue, addClick}) {
  console.log('form랜더링');
  const printClick = (e) => {
    setValue(e.target.value);
  }
  return (
    <div>
      <form className='flex mt-5' onSubmit={addClick}>
            <input 
              type = "text"
              name = "value"
              className='w-full flex-15 p-5 border-none  rounded'
              placeholder = "HEY, what you gonna do?"
              fontFamily = "font-family: 'Hahmlet', serif;"
              value = {value}
              onChange={printClick}/>

              <input 
              type = "submit"
              className='rounded p-2 ml-2 hover:bg-orange-300 cursor-pointer'
              value = "➕"/>
          </form>
    </div>
  )
}
