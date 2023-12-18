import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import tw from 'twin.macro';
import Card from './Card'

const Heading = styled.div`
  ${tw`ml-10 mt-4 my-5 text-3xl text-white font-bold`}
`
const SafeArea = styled.div`${tw`my-10`}`

const Container = styled.div`${tw`w-auto mx-10 grid-flow-col grid overflow-x-auto`}`

const Genre = ({ type, genreId }) => {
    const [apiData, setApiData] = useState()

    // Getting data for type with genreId
    useEffect(() => {
        axios.get(`/api/${type}?genre=${genreId}`)
            .then((response) => { 
                setApiData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    const type_genre = {
      "discoverMovie": "Movies",
      "discoverTV": "TV Series"
    }

    const MovieGenres = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Science Fiction",
      10770: "TV Movie",
      53: "Thriller",
      10752: "War",
      37: "Western"
    };

    const TVShowGenres = {
      10759: "Action & Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      10762: "Kids",
      9648: "Mystery",
      10763: "News",
      10764: "Reality",
      10765: "Sci-Fi & Fantasy",
      10766: "Soap",
      10767: "Talk",
      10768: "War & Politics",
      37: "Western"
    };
    
  return (
    <SafeArea>
      <Heading>
        {type_genre[type]==="Movies" 
          ? MovieGenres[genreId] + " " + type_genre[type] 
          : TVShowGenres[genreId] + " " + type_genre[type]
        }
      </Heading>
      <Container>
        {apiData && apiData.results.map((data, index) => (
            <div key={data.id}>
                <Card data={data}/>
            </div>
        ))}
      </Container>
    </SafeArea>
  )
}

export default Genre