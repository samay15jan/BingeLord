import React from 'react'
import Genre from './action/Genre'
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`${tw``}`

const GenreCards = () => {
  return (
    <Container>
      <Genre type="discoverMovie" genreId="28"/>
      <Genre type="discoverMovie" genreId="35"/>
      <Genre type="discoverMovie" genreId="27"/>
      <Genre type="discoverMovie" genreId="10749"/>
      <Genre type="discoverMovie" genreId="9648"/>
      <Genre type="discoverMovie" genreId="16"/>
      <Genre type="discoverMovie" genreId="37"/>
    </Container>
  )
}

export default GenreCards