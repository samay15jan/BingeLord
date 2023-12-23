import React, { useEffect, useState } from 'react';
import tw from 'twin.macro'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`${tw`absolute right-0 top-80 mt-2`}`
const Flex = styled.div`${tw`flex mx-10 font-bold`}`
const Button = styled.button`${tw`flex text-lg mx-10 font-bold bg-[#101010] px-4 p-1 rounded-lg`}
&:hover {
  background-color: #353535;
  color: white;
}`
const Grid = styled.div`
${tw`grid grid-cols-2`}
`
const Image1 = styled.img`
${tw`ml-16 mt-5 w-72 h-32 rounded-xl`}
`
const Image2 = styled.img`
  ${tw`ml-16 mt-5 w-36 h-32 rounded-xl object-cover`}
`
const Image3 = styled.img`
  ${tw`ml-16 mt-5 w-36 h-32 rounded-xl object-cover`}
`
const Image4 = styled.img`
${tw`ml-2 mt-5 w-[135px] h-[275px] rounded-xl object-cover`}
`

const Media = ({ data }) => {
    const [apiData, setApiData] = useState()
    const [Images, setImages] = useState()
      // Getting Images Based on ID
      const ID = data?.id
      useEffect(() => {
        axios.get(`/api/imagesMovie?id=${ID}`)
        .then((response) => {
          setApiData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      }, [ID])

    const getImages = () => {
      if (apiData) {
        let filteredBackdrops = apiData?.backdrops.filter(backdrop => {
          return backdrop.vote_count >= 10.0;
        });

      if (apiData && filteredBackdrops.length < 5) {
        filteredBackdrops = apiData?.backdrops.filter(backdrop => {
          return backdrop.vote_count >= 5.0;
        });

      if (apiData && filteredBackdrops.length >= 0 ) {
        filteredBackdrops = apiData?.backdrops.filter(backdrop => {
          return backdrop.vote_count >= 0;
      });
      }
      setImages(filteredBackdrops.reverse());
    }};
  }

    useEffect(() => {
      getImages();
    }, [apiData]);
    
    // Image Click Fullscreen
    const navigate = useNavigate()

    const handleClick = (menu, url) => {
      navigate(`/movie/${data.id}/${menu}${url}`);
    };
    return (
    <Container>
      <Flex>
        <Button onClick={() => handleClick("photos", "/all")}>Photos</Button>
        <Button onClick={() => handleClick("videos", "/all")}>Videos</Button>
      </Flex>
      {Images && 
        <>
          <Image1 onClick={() => handleClick("image", `${Images[0]?.file_path}`)} src={`https://image.tmdb.org/t/p/original${Images[0]?.file_path}`} alt="loading..." />
          <Grid>
            <div>
              <Image2 onClick={() => handleClick("image", `${Images[1]?.file_path}`)} src={`https://image.tmdb.org/t/p/original${Images[1]?.file_path}`} alt="loading..." />
              <Image3 onClick={() => handleClick("image", `${Images[2]?.file_path}`)} src={`https://image.tmdb.org/t/p/original${Images[2]?.file_path}`} alt="loading..." />
            </div>
            <Image4 onClick={() => handleClick("image", `${Images[3]?.file_path}`)} src={`https://image.tmdb.org/t/p/original${Images[3]?.file_path}`} alt="loading..." />
          </Grid>
        </>
        }
    </Container>
  )
}

export default Media