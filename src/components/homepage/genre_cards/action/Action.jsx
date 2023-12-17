import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import tw from 'twin.macro';
import Card from './Card'

const Container = styled.div`${tw`w-screen absolute gap-4 grid-flow-col grid overflow-x-auto`}
`
const Action = () => {
    const [apiData, setApiData] = useState()

    // Getting data for Action movies
    useEffect(() => {
        const actionGenreId= 28 
        axios.get(`/api/discoverMovie?genre=${actionGenreId}`)
            .then((response) => { 23
                setApiData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
  return (
    <div>
    <h1>Action Movies</h1>
      <Container>
        {apiData && apiData.results.map((data, index) => (
            <div key={data.id}>
                <Card data={data}/>
            </div>
        ))}
      </Container>
    </div>
  )
}

export default Action