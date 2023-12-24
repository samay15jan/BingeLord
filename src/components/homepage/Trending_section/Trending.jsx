import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Background from './Background'
import Details from './Details'
import styled from 'styled-components'
import tw from 'twin.macro'
import Poster from './Poster';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Main= styled.div`${tw`w-screen h-screen`}`
const Container = styled.div`${tw`relative`}`

const Trending = () => {
  const { type } = useParams();

  const [apiData, setApiData] = useState()
  const [number, setNumber] = useState('0')
  const navigate = useNavigate()

  const apiType = () => {
    if(type === 'movies'){
      return 'trendingMovie'
    }
    else if(type === 'tv'){
      return 'trendingTV'
    }
    else navigate('/404')
  }
  
  // Getting data for trending movies
  useEffect(() => {
      const type = apiType()
      axios.get(`/api/${type}`)
          .then((response) => {
              setApiData(response.data);
          })
          .catch((error) => {
              console.log(error);
          });
  }, [type])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prevNumber) => (prevNumber + 1) % (apiData?.results.length || 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, [apiData])

  const data = apiData?.results[number];
  
  return (
    <Main>
      {apiData && 
        <Container>
          <Details data={data} type={type}/>
          <Background image={data.backdrop_path}/>
          <Poster image={data.poster_path}/>
        </Container>
      }
    </Main>
  )
}

export default Trending
