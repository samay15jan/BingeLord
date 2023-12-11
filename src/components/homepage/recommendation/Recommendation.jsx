import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import tw from 'twin.macro';
import Card from './Card'

const Container = styled.div`${tw`grid-cols-3 gap-4 grid grid-flow-col overflow-y-scroll`}`

const Recommendation = () => {
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
    <Container>
        {apiData && apiData.results.map((data, index) => (
            <div key={data.id}>
                <Card data={data}/>
            </div>
        ))}
    </Container>
  )
}

export default Recommendation