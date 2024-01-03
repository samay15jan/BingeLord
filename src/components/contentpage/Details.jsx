import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import TrailerButton from './TrailerButton'
import PlayButton from './PlayButton'
import Info from '../homepage/Trending_section/Info'

const Container = styled.div`${tw`relative lg:absolute top-14 left-2 lg:left-96 xl:left-96 2xl:left-96 z-50`}`
const Year = styled.div`${tw`text-lg lg:text-sm ml-5 font-semibold`}`
const Title = styled.div`${tw`text-4xl font-bold px-5 py-4 w-screen lg:w-[550px]`}`
const Genre = styled.div`${tw`flex text-sm ml-4 font-semibold`}`
const GenreType = styled.div`${tw`mx-1`}`
const Text1 = styled.div`${tw`text-lg ml-5 mt-4 font-semibold`}`
const Voting = styled.div`${tw`text-xl font-bold ml-5`}`
const Text2 = styled.div`${tw`text-lg ml-5 mt-12 font-semibold`}`
const Overview = styled.div`${tw`mt-4 text-sm lg:ml-5 lg:mr-10 text-gray-100 opacity-70 px-5 lg:px-0 w-screen lg:w-[550px]`}`
const Text3 = styled.div`${tw`text-lg ml-5 mt-32 lg:mt-28 mb-5 font-semibold`}`
const GridContainer1 = styled.div`${tw`grid grid-cols-2 mt-2 justify-between w-screen lg:w-[550px]`}`
const GridContainer2 = styled.div`${tw`grid grid-cols-1 mt-1`}`
const Text4 = styled.div`${tw`text-sm ml-5 font-semibold`}`
const Text5 = styled.div`${tw`text-sm mr-10 lg:mr-0 text-gray-100 opacity-70 text-right`}`

const Details = ({ data, type }) => {

  const rating = () => {
    const rate = data.vote_average.toFixed(0)/2
    if(rate === 0){return}
    else if(rate >= 0.5 && rate < 1.5){return '⭐'}
    else if(rate >= 1.5 && rate < 2.5){return '⭐ ⭐'}
    else if(rate >= 2.5 && rate < 3.5){return '⭐ ⭐ ⭐'}
    else if(rate >= 3.5 && rate < 4.5){return '⭐ ⭐ ⭐ ⭐'}
    else{return '⭐ ⭐ ⭐ ⭐ ⭐'}
  }

  const checkYearMovie = () => {
    if(type === 'movies'){
      return data.release_date
    }
  }

  const checkYearSeries = () => {
    if(type === 'tv' && data.first_air_date ){
      const startYear = new Date(data.first_air_date).getFullYear()
      if(data.last_air_date){
        const endYear = new Date(data.last_air_date).getFullYear()
        return startYear + " - " + endYear
      }
      return startYear 
    }
  }

  const yearMovie = new Date(checkYearMovie()).getFullYear()

  const getTrailer = data.videos?.results.filter((id => (id.type === "Trailer")))
  const directorMovie = data.credits?.crew.filter((id) => (id.job === "Director"))
  const directorSeries = data.created_by
  const producer = data.credits?.crew.filter((id) => (id.job === "Producer"))
  const screenplay = data.credits?.crew.filter((id) => (id.job === "Screenplay"))
  
  return (
    <Container>
          {/* Getting Year for Movie OR Tv Series */}
          {type === 'movies' 
            ? <Year>{yearMovie}</Year>
            : <Year>{checkYearSeries()}</Year>
          }

          <Title>{type === 'tv' ? data.name : data.title}</Title>

          {/* Genre */}
          <Genre>
            {data.genres.map((genre, index) => (
              <GenreType key={genre.id}>
                {genre.name}
              </GenreType>
            ))}
          </Genre>

          <Text1>TMDB</Text1>
          <Voting>{rating()}</Voting>
          
          <Text2>StoryLine</Text2>
          <Overview>{data.overview}</Overview>

          {/* Vidsrc Streaming button */}
          <PlayButton menu={'vidsrc'} ID={data.id} text={'Play'} type={type}/>
          
          {/* Youtube Trailer Streaming */}
          {getTrailer.length > 0 
            ? <TrailerButton 
                ID={data.id}
                menu={getTrailer[0].type}
                url={getTrailer[0].key} 
                text={'Watch Trailer'}
                type={type}
              /> 
            : ''
          }
          <div className='ml-24'>
            <Info text={'+'} type={type} data={data.id}/>
          </div>

          <Text3>More Details</Text3>
          
          {/* Getting director for Movies OR Tv Series */}
          {type === "movies" 
            ? directorMovie.length >= 1 && 
                  <GridContainer1>
                    <Text4>Director:</Text4>
                    <Text5>{directorMovie[0]?.name}</Text5>
                  </GridContainer1>
            : directorSeries.length >= 1 && 
                  <GridContainer1>
                    <Text4>Director:</Text4>
                    <Text5>{directorSeries[0]?.name}</Text5>
                  </GridContainer1>
          }
         
          {/* Getting Producer */}
          {producer.length > 1 && 
            <GridContainer1>
              <Text4>Producer:</Text4>
              <GridContainer2>
                {producer.map((data, index) => (
                  <Text5 key={data.id}>
                    {data.name}
                  </Text5>
                ))}
              </GridContainer2>
            </GridContainer1>
          }

          {/* Getting Writers for Movies */}
          {screenplay.length > 1 && 
            <GridContainer1>
              <Text4>Screenplay:</Text4> 
              <GridContainer2>
                {screenplay.map((data, index) => (
                  <Text5 key={data.id}>
                    {data.name}
                  </Text5>
                ))}
              </GridContainer2>
            </GridContainer1>
          }

          {/* Getting Collection for Movies */}
          {data.belongs_to_collection && 
            <GridContainer1>
              <Text4>Collection:</Text4>
              <GridContainer2>
                  <Text5>{data.belongs_to_collection?.name}</Text5>
              </GridContainer2>
            </GridContainer1>
          }

          {/* Getting Number of Episodes for TV Series */}
          {data.number_of_episodes && 
            <GridContainer1>
              <Text4>Total Episodes:</Text4>
              <GridContainer2>
                  <Text5>{data.number_of_episodes}</Text5>
              </GridContainer2>
            </GridContainer1>
          }

          {/* Getting Number of Seasons for TV Series */}
          {data.number_of_seasons && 
            <GridContainer1>
              <Text4>Total Seasons:</Text4>
              <GridContainer2>
                  <Text5>{data.number_of_seasons}</Text5>
              </GridContainer2>
            </GridContainer1>
          }
          
          {/* Getting Status for TV Series */}
          {data.status && 
            <GridContainer1>
              <Text4>Status:</Text4>
              <GridContainer2>
                  <Text5>{data.status}</Text5>
              </GridContainer2>
            </GridContainer1>
          }

    </Container>
  )
}

export default Details