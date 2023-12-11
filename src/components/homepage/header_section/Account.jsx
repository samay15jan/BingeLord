import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Text = styled.div`${tw`text-lg font-bold mx-10 hover:text-gray-500 mt-6`}`

const Account = () => {
  return (
    <Text>Account</Text>
  )
}

export default Account