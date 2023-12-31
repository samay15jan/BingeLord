import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Image from '../../assets/account.png'
import { ref, child, onValue, remove } from "firebase/database"
import { database } from '../../backend/firebase.js'
import { logout } from '../../backend/auth.js'
import { useNavigate } from 'react-router-dom'
import CardContainer from './CardContainer'
import { IoMdClose } from "react-icons/io";

const Container = styled.div`${tw`mx-20`}`
const CloseButton = styled.button`${tw`fixed z-10 right-10 top-10 px-1 py-1 rounded-lg bg-[#080808]`} 
  transition: background 0.1s ease;
  &:hover {
    background-color: #252525;
}`
const Text = styled.div`${tw`fixed mt-10 my-5 ml-12 text-4xl font-extrabold`}`
const ImageContainer = styled.img`${tw`fixed top-16 w-96 mt-10`}`
const SubContainer = styled.div`${tw`fixed top-[450px] w-80 h-44 ml-12 bg-[#151515] rounded-3xl`}`
const Email = styled.div`${tw`text-xl font-bold flex justify-center pt-10 pb-6`}`
const Button = styled.div`${tw`flex justify-center mt-1 mx-20 p-2 text-xl font-bold shadow-md shadow-[#8f1835] h-12 rounded-3xl`}
transition: background 0.5s ease;
background: linear-gradient(to right, #d91432, #e61b48);
&:hover {
    background: linear-gradient(to right, #252525, #252525);
    color: #d9d4d5;
}
&:focus {
  outline: 1px solid #e61b48;
}`
const WatchListContainer = styled.div`${tw`pb-10 absolute right-28 w-1/2 h-auto`}`
const WatchListText = styled.div`${tw`fixed pt-10 z-50 bg-[#080808] w-1/2 text-2xl font-bold flex justify-center pb-10`}`
const List = styled.div`${tw`mt-28 grid grid-cols-3`}`
const Empty = styled.div`${tw`absolute left-72 top-72 ml-2 text-sm font-medium flex justify-center`}`

const Accounts = () => {
  const [data, setData] = useState('')
  const userId = localStorage.getItem('userId')
  const email = localStorage.getItem('email')
  const navigate = useNavigate()

  // Firebase Database
  useEffect(() => {
    const watchlistRef = ref(database,`users/${userId}/watchlist`)
    onValue(watchlistRef, (snapshot) => {
      setData(snapshot.val())
    })
  },[])

  const handleRemove = (id) => {
    const url = Object.keys(data).find(key => data[key].id === id);
    const watchlistRef = ref(database,`users/${userId}/watchlist`)
    const childRef = child(watchlistRef, url)
    remove(childRef)
  }

  const handleLogout = async () => {
    try {
      await logout()
      localStorage.removeItem('userId')
      localStorage.removeItem('email')
      navigate('/auth')
    } catch (error) {
      console.log(error)
    }
  }

  const close = () => {
    navigate(`/movies`);
  }

  return (
    <Container>
        <CloseButton onClick={close}>
          <IoMdClose size={30}/>
        </CloseButton>
        <Text>Users Portriat</Text>
          <ImageContainer src={Image} alt="Logo" />
          <SubContainer>
            <Email>{email}</Email>
            <Button onClick={handleLogout}>Logout</Button>
          </SubContainer>
          <WatchListContainer>
            <WatchListText>Watch Later</WatchListText>
            <List>
              {data ? '' : <Empty>Nothing Found !</Empty>}
              {data && Object.values(data).map((data, index) => (
                <div key={data.id}>
                  <CardContainer handleClick={handleRemove} type={data.type} id={data.id}/>
                </div>
              ))}
            </List>
          </WatchListContainer>
    </Container>
  )
}

export default Accounts