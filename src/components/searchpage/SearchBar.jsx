import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
  
const Form = styled.form`${tw`fixed mt-5 ml-96 w-full`}`
const Search = styled.input`${tw`ml-20 m-1 w-1/3 h-10 p-6 rounded-3xl bg-[#161616] text-white text-xl`}
&:focus {
  outline: 4px solid #515151;
}`

const Button = styled.button`${tw`absolute mt-1 ml-[470px] text-lg text-white font-bold px-5 py-3 rounded-3xl`}
transition: background 0.5s ease;
background: linear-gradient(to right, #cc021a, #FF004D);
&:hover {
  background: linear-gradient(to right, #a60516, #a60516);
  color: #d9d4d5;
`

const SearchBar = ({ onsubmit, onchange }) => {
  return (
        <Form onSubmit={onsubmit}>
            <Button type="submit">
                <FiSearch size={25}/>
            </Button>
            <Search placeholder='Search' accessKey='s' type="text" onChange={onchange}/>
        </Form>
  )
}

export default SearchBar