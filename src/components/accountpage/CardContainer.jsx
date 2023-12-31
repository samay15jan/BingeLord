import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../homepage/genre_cards/action/Card'
import styled from 'styled-components'
import tw from 'twin.macro'
import { IoMdClose } from "react-icons/io";

const Button = styled.button`${tw`hover:animate-spin absolute z-40 ml-40 mt-4 px-3 py-1 rounded-3xl bg-[#080808]`} 
  transition: background 0.1s ease;
  &:hover {
    background-color: white;
    color: black
}`

const CardContainer = ({ id, type, handleClick }) => {
    const [apiData, setApiData] = useState()
    
    const apiType = () => {
    if(type === 'movies'){
        return 'movie'
    }
    else if(type === 'tv'){
        return 'series'
    }}
    
    // Getting data for based on id
    useEffect(() => {
        const type = apiType()
        axios.get(`/api/${type}?id=${id}`)
        .then((response) => {
            setApiData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id, type])

  return (
    <div>
        <Button onClick={() => handleClick(id)}>
            <IoMdClose size={20}/>
        </Button>
        {apiData && <Card type={type} data={apiData}/>}
    </div>
  )
}

export default CardContainer