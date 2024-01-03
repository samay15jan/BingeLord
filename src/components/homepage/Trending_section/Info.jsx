import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ref, push } from "firebase/database";
import { database } from '../../../backend/firebase.js'

const Button = styled.button`${tw`absolute z-40 bg-[#191919] shadow-2xl shadow-[#262626] text-white font-bold text-lg px-6 py-2 ml-56 mt-9 rounded-xl`}
transform: skew(-14deg);
transition: background 0.3s ease;
&:hover {
    background-color: #353535;
    color: white;
}`
const Icon = styled.div`${tw`text-2xl`}`

const Info = ({ text, type, data }) => {
  const userId = localStorage.getItem('userId')
  const watchlistRef = ref(database,`users/${userId}/watchlist`);
  const addToWatchlist = (data) => {
    push(watchlistRef, { 
      type: type,
      id: data
    });
  }
  return (
    <Button onClick={() => addToWatchlist(data)}>
        <Icon>{text}</Icon>
    </Button>
  )
}

export default Info