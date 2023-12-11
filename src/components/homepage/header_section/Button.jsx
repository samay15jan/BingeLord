import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Text = styled.div`${tw`text-lg font-bold mx-10 hover:text-gray-500 mt-6`}`

const Button = ({text}) => {
  return (
    <Text>{text}</Text>
  )
}

export default Button