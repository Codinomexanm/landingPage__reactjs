import React from 'react'

const TextInput = ({handleChange,searchValue}) => {
  return (
    <input onChange={handleChange} value={searchValue} type='search'/>
  )
}

export default TextInput
