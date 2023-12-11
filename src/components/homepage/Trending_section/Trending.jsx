import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Background from './Background'
import Details from './Details'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`${tw`absolute`}`

const Trending = () => {
  const [apiData, setApiData] = useState()

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


  return (
    <div>
      {apiData && 
        <Container>
          <Details data={apiData?.results[0]}/>
          <Background image={apiData?.results[0].backdrop_path}/>
        </Container>
      }
    </div>
  )
}

export default Trending