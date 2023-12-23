import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`${tw`mb-10 mt-56 ml-14 w-72 h-72 p-4 rounded-2xl bg-[#161616]`}`
const SubContainer = styled.div`${tw`w-60 h-56 mt-2 overflow-y-auto`}`
const Heading = styled.div`${tw`text-lg font-bold`}`
const Flex = styled.div`${tw`flex m-2`}`
const Grid = styled.div`${tw`grid grid-rows-2`}`
const Name = styled.div`${tw`ml-6 text-sm font-bold`}`
const Character = styled.div`${tw`ml-6 text-xs text-gray-100 opacity-70`}`
const Icon = styled.img`${tw`w-12 h-12 rounded-full`}`

const Cast = ({ data }) => {
    const actors = data.credits?.cast?.slice(0, 10)

    return (
    <Container>
        <Heading>Top Cast</Heading>
        <SubContainer>
            {actors.map((actor, index) => (
                <Flex key={actor.id}>
                    <Icon src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt={"image"}/>
                    <Grid>
                        <Character>{actor.character}</Character>
                        <Name>{actor.name}</Name>
                    </Grid>
                </Flex>
            ))}
        </SubContainer>
    </Container>
  )
}

export default Cast