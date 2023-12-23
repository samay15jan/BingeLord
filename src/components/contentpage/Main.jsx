import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import tw from 'twin.macro'
import styled from 'styled-components'
import Poster from './Poster'
import Details from './Details'
import BackdropImage from './BackdropImage'
import Cast from './Cast'
import Media from './Media'

const Container = styled.div`${tw``}`

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