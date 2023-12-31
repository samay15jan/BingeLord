import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import WatchNow from './WatchNow'
import Info from './Info'

const Container = styled.div`${tw`absolute ml-14 mt-48 w-[600px]`}`
const Trending = styled.div`${tw`text-lg px-5 text-gray-400`}`
const Title = styled.div`${tw`text-5xl font-bold p-5`}`
const Text1 = styled.div`${tw`text-lg ml-5 mt-4 font-semibold`}`
const Voting = styled.div`${tw`text-xl font-bold ml-5`}`
const Overview = styled.div`${tw`mt-4 text-lg ml-5 mr-10 text-gray-400`}`

const Details = ({ data, type }) => {
  const contentType = () => {
    if (type === 'movies') {
      return 'Popular Film Of Month'
    } else {
      return 'Popular Series Of Month'
    }
  }

  const rating = () => {
    const rate = data.vote_average.toFixed(2)/2
    if(rate === 0){return}
    else if(rate >= 0.5 && rate < 1.5){return '⭐'}
    else if(rate >= 1.5 && rate < 2.5){return '⭐ ⭐'}
    else if(rate >= 2.5 && rate < 3.5){return '⭐ ⭐ ⭐'}
    else if(rate >= 3.5 && rate < 4.5){return '⭐ ⭐ ⭐ ⭐'}
    else{return '⭐ ⭐ ⭐ ⭐ ⭐'}
  }

  // Word Limit for Overview
  const words = data.overview?.split(' ');
  const cutWords = words?.slice(0, 30);
  const finalOutput = cutWords?.join(' ') + (words?.length > 30 ? '...' : '');

  return (
    <Container>
          <Trending>{contentType()}</Trending>
          <Title>{type === 'tv' ? data.name : data.title}</Title>
          <Text1>TMDB</Text1>
          <Voting>{rating()}</Voting>
          <Overview>{finalOutput}</Overview>
          <WatchNow text={'Watch Now'} id={data.id} type={type}/>
          <Info text={'+'} type={type} data={data.id}/>
    </Container>
  )
}

export default Details
