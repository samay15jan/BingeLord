import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import WatchNow from './WatchNow'
import Info from './Info'

const Container = styled.div`${tw`absolute ml-14 mt-48 w-[600px]`}`
const Trending = styled.div`${tw`text-lg px-5 text-gray-400`}`
const Title = styled.div`${tw`text-5xl font-bold p-5`}`
const Voting = styled.div`${tw`text-xl font-bold p-5`}`
const Overview = styled.div`${tw`mt-4 text-lg ml-5 mr-10 text-gray-400`}`

const Details = ({data}) => {
  const rating = "TMDB Rating " + data.vote_average.toFixed(1) + "/10"

  var contentType
  if (data.media_type = 'movie') {
    contentType = 'THE FILM OF MONTH'
  } else {
    contentType = 'THE SERIES OF MONTH'
  }

  // Word Limit for Overview
  const words = data.overview?.split(' ');
  const cutWords = words?.slice(0, 30);
  const finalOutput = cutWords?.join(' ') + (words?.length > 30 ? '...' : '');

  return (
    <Container>
          <Trending>{contentType}</Trending>
          <Title>{data.title}</Title>
          <Voting>{rating}</Voting>
          <Overview>{finalOutput}</Overview>
          <WatchNow/>
          <Info/>
    </Container>
  )
}

export default Details