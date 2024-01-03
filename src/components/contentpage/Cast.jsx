import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`${tw`relative mt-32 mb-10 lg:mt-56 ml-0 lg:ml-14 w-screen lg:w-72 max-h-96 lg:max-h-72 p-4 lg:rounded-2xl bg-[#161616]`}`
const SubContainer = styled.div`${tw`w-full max-h-56 lg:h-56 mt-2 overflow-y-auto`}`
const Heading = styled.div`${tw`text-lg font-bold ml-3 mb-5 lg:mb-0`}`
const Flex = styled.div`${tw`flex m-3 ml-6 lg:ml-1`}`
const Grid = styled.div`${tw`grid grid-rows-2`}`
const Name = styled.div`${tw`ml-6 text-sm font-bold`}`
const Character = styled.div`${tw`ml-6 text-sm lg:text-xs text-gray-100 opacity-70`}`
const Icon = styled.img`${tw`w-16 h-16 lg:w-12 lg:h-12 object-cover rounded-xl lg:rounded-full`}`

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