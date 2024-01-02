import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import tw from 'twin.macro';
import Card from './Card'
import { useNavigate } from 'react-router-dom';

const SafeArea = styled.div`${tw`my-10`}`
const Heading = styled.div`${tw`ml-10 mt-10 my-5 text-3xl text-white font-bold`}`
const Container = styled.div`${tw`w-auto mx-2 lg:mx-10 grid-flow-col grid overflow-x-auto`}`
const SubContainer = styled.div`${tw`my-5`}`

const Genre = ({ type, movieID, seriesID }) => {
    const [apiData, setApiData] = useState()
    
    const navigate = useNavigate()
    const genreType = () => {
      if(type === 'movies'){
        return movieID
      }
      else if(type === 'tv'){
        return seriesID
      }
      else navigate('/404')
    }

    const finalType = {
      'movies': 'discoverMovie',
      'tv': 'discoverTV'
    }
    // Getting data for type with genreId
    useEffect(() => {
        const genre = genreType()
        const endpoint = finalType[type]
        axios.get(`/api/${endpoint}?genre=${genre}`)
            .then((response) => { 
                setApiData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [type])

    const type_genre = {
      "movies": "Movies",
      "tv": "TV Series"
    }

    const MovieGenres = {
      28: "Action 💪🏼 🔥",
      27: "Horror 👻🔪🩸",
      35: "Comedy 🤣 🍿",
      10749: "Romance 💕 🫰🏻",
      9648: "Mystery 🧐 🕵️ 🔍",
      878: "Editor's Picks 👨🏻‍💻 😈",
      16: "Animation 🎬 🎨",
      10752: "War ⚔️ 🛡️ 🧨",
      37: "Western 🔫 🤠",
    };

    const TVShowGenres = {
      10759: "Action 💪🏼 🔥",
      35: "Comedy 🤣 🍿",
      18: "Drama 🍿 🎬",
      9648: "Mystery 🧠 🔮",
      10765: "Editor's Picks 👨🏻‍💻 😈",
      16: "Animation 🎬 🎨",
      80: "Crime 🔪 🚨",
      10768: "War ⚔️ 🛡️ 🧨",
      37: "Western 🔫 🤠",
    };
    
  return (
    <SafeArea>
      <Heading>
        {type === "movies" ? MovieGenres[movieID] : TVShowGenres[seriesID] }
      </Heading>
      <Container>
        {apiData && apiData.results.map((data, index) => (
            <SubContainer key={data.id}>
                <Card type={type} data={data}/>
            </SubContainer>
        ))}
      </Container>
    </SafeArea>
  )
}

export default Genre