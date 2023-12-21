import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import Poster from './Poster'
import Details from './Details'
import BackdropImage from './BackdropImage'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`${tw`bg-[#121212] w-screen h-screen`}`
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

  return (
    <div>
        {apiData && 
            <Container>
                <Poster image={apiData.poster_path}/> 
                <Details data={apiData}/>
                <BackdropImage image={apiData.backdrop_path}/>
            </Container>
        }
    </div>
  )
}

export default Main