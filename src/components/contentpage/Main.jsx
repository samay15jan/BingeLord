import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import tw from 'twin.macro'
import styled from 'styled-components'
import Poster from './Poster'
import Details from './Details'
import BackdropImage from './BackdropImage'
import Cast from './Cast'
import Media from './Media'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Container = styled.div`${tw``}`
const CloseButton = styled.button`${tw`absolute z-10 right-5 top-5 px-1 py-1 rounded-lg bg-[#080808]`} 
  transition: background 0.1s ease;
  &:hover {
    background-color: #252525;
}`

const Main = ({ id }) => {
    const [apiData, setApiData] = useState()
    
    // Getting data for trending movies
    useEffect(() => {
        axios.get(`/api/movie?id=${id}`)
        .then((response) => {
            setApiData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])
    const navigate = useNavigate()
    const close = () => {
      navigate(`/`);
    }

  return (
    <div>
        {apiData && 
            <Container>
                <CloseButton onClick={close}>
                    <IoMdClose size={30}/>
                </CloseButton>
                <BackdropImage image={apiData.backdrop_path}/>
                <Poster image={apiData.poster_path}/> 
                <Details data={apiData}/>   
                <Cast data={apiData}/>
                <Media data={apiData}/>
            </Container>
        }
    </div>
  )
}

export default Main