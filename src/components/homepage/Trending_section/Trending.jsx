import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Background from './Background'
import Details from './Details'
import styled from 'styled-components'
import tw from 'twin.macro'
import Poster from './Poster';

const Container = styled.div`${tw`absolute`}`

const Trending = () => {
  const [apiData, setApiData] = useState()
  const [number, setNumber] = useState('0')

  // Getting data for trending movies
  useEffect(() => {
      axios.get('/api/movie_trending')
          .then((response) => {
              setApiData(response.data);
          })
          .catch((error) => {
              console.log(error);
          });
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prevNumber) => (prevNumber + 1) % (apiData?.results.length || 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, [apiData])

  const data = apiData?.results[number];
  
  return (
    <div>
      {apiData && 
        <Container>
          <Details data={data}/>
          <Background image={data.backdrop_path}/>
          <Poster image={data.poster_path}/>
        </Container>
      }
    </div>
  )
}

export default Trending