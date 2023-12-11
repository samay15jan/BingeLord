import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`${tw`absolute ml-14 mt-48 w-[600px]`}`
const Trending = styled.div`${tw`text-lg px-5 text-gray-400`}`
const Title = styled.div`${tw`text-5xl font-bold p-5`}`
const Voting = styled.div`${tw`text-xl font-bold p-5`}`
const Overview = styled.div`${tw`mt-16 text-lg px-5 text-gray-400`}`

const Details = ({data}) => {
  const rating = "TMDB Rating " + data.vote_average.toFixed(1) + "/10"
  var contentType
  if (data.media_type = 'movie') {
    contentType = 'THE FILM OF MONTH'
  } else {
    contentType = 'THE SERIES OF MONTH'
  }
  return (
    <Container>
          <Trending>{contentType}</Trending>
          <Title>{data.title}</Title>
          <Voting>{rating}</Voting>
          <Overview>{data.overview}</Overview>
    </Container>
  )
}

export default Details