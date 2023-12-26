import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Button = styled.button`${tw`text-lg text-white font-bold bg-red-700 hover:bg-red-800 px-4 py-2 rounded-3xl`}`

const TypeButton = ({ onclick, text}) => {
  return (
    <Button onClick={onclick}>
        {text === 'searchTV' ? 'Series' : 'Movies'}
    </Button>
  )
}

export default TypeButton