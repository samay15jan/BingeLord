import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Image from '../../assets/account.png'
import { ref, child, onValue } from "firebase/database";
import { database } from '../../backend/firebase.js'

const Container = styled.div`${tw`mx-20 my-10`}`
const Text = styled.div`${tw`my-5 ml-12 text-4xl font-extrabold`}`
const SubContainer = styled.div`${tw`w-screen mx-20 my-10`}`

const Accounts = () => {
  const userId = localStorage.getItem('userId')

  const watchlistRef = ref(database,`users/${userId}/watchlist`);
  
  const removeItem = (id) => {
    child(watchlistRef,('id').remove())
  }

  onValue(watchlistRef, (snapshot) => {
    const data = snapshot.val();
  });
  return (
    <Container>
        <Text>Users Portriat</Text>
        <img src={Image} alt="Logo" />
        <SubContainer>

        </SubContainer>
    </Container>
  )
}

export default Accounts