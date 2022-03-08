import React from 'react'

export const DeleteAll = ({deleteAllClick}) => {

  return (
    <div>
      <button
      onClick={() => deleteAllClick()}className='hover:bg-gray-500 hover:text-white rounded p-2'>전체 삭제</button>
    </div>
  )
}
export default DeleteAll;