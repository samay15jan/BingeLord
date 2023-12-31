import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Card from '../homepage/genre_cards/action/Card'

const Heading = styled.div`
  ${tw`ml-10 mt-5 my-5 text-3xl text-white font-bold`}
` 
const SafeArea = styled.div`${tw`w-auto my-20`}`

const Container = styled.div`${tw`w-auto mx-10 grid grid-cols-6`}`
const SubContainer = styled.div`${tw`mt-4`}`

const Similar = ({ type, data }) => {
  var limitedResults
  if (data.results.length >= 18) {
     limitedResults = data.results?.slice(0, 18)
  }
  
  return (
    <SafeArea>
      { data.results.length > 0 &&
       <>
        <Heading>
            {type === "movies" ? "Similar Movies" : "Similar Series"}
        </Heading>
        <Container>
            {limitedResults.length > 0 && limitedResults?.map((data, index) => (
                <SubContainer key={data.id}>
                    <Card type={type} data={data}/>
                </SubContainer>
            ))}
        </Container>
       </>
      }
    </SafeArea>
  )
}

export default Similar