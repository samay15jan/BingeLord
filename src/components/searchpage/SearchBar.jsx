import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
 
const Search = styled.input`${tw`w-1/3 h-10 p-6 rounded-3xl bg-[#161616] text-white text-xl`}
&:focus {
  outline: 2px solid #515151;}
`

const SearchBar = ({ onsubmit, onchange }) => {
  return (
    <>
        <form onSubmit={onsubmit}>
            <Search placeholder='Search' accessKey='s' type="text" onChange={onchange}/>
            <button type="submit">
                <FiSearch/>
            </button>
        </form>
    </>
  )
}

export default SearchBar