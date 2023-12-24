import React, { useEffect, useState } from 'react';
import tw from 'twin.macro'
import styled from 'styled-components'
import axios from 'axios'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Container = styled.div`${tw``}`
const Image = styled.img`${tw`px-10 py-10 w-screen h-screen justify-center`}`
const YoutubeIframe = styled.iframe`${tw`px-10 py-10 w-screen h-screen justify-center`}`
const NextButton = styled.button`${tw`absolute left-10 top-1/2 font-bold bg-[#101010] py-5 rounded-r-lg`}
&:hover {
  background-color: #353535;
  color: white;
}`
const PreviousButton = styled.button`${tw`absolute right-10 top-1/2 font-bold bg-[#101010] py-5 rounded-l-lg`}
&:hover {
  background-color: #353535;
  color: white;
}`

const Media = ({ ID, menu, type  }) => {
    const [imageData, setImageData] = useState()
    const [Data, setData] = useState()
    
    const imageType = () => {
      if(type === 'movies'){
        return "imagesMovie"
      } 
      else if(type === 'tv') {
        return "imagesTV"
      }
    }
    const videoType = () => {
      if(type === 'movies'){
        return "movie"
      } 
      else if(type === 'tv') {
        return "series"
      }
    }
    
    useEffect(() => {
      const image = imageType()
      const video = videoType()
      // Getting Images Based on ID
      if(menu === 'photos') {
        axios.get(`/api/${image}?id=${ID}`)
        .then((response) => {
          setImageData(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
      } 

      // Getting Videos Based on ID
      if(menu === 'videos') {
        axios.get(`/api/${video}?id=${ID}`)
        .then((response) => {
          setData(response.data?.videos?.results);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }, [ID, type])


    const getImages = () => {
      if (imageData) {
        let filteredBackdrops = imageData?.backdrops.filter(backdrop => {
          return backdrop.vote_count >= 10.0;
        });
      if (imageData && filteredBackdrops.length < 5) {
        filteredBackdrops = imageData?.backdrops.filter(backdrop => {
          return backdrop.vote_count >= 5.0;
        });
      if (imageData && filteredBackdrops.length >= 0 ) {
        filteredBackdrops = imageData?.backdrops.filter(backdrop => {
          return backdrop.vote_count >= 0;
      });
      }
      setData(filteredBackdrops.reverse());
    }}}

    useEffect(() => {
      getImages();
    }, [imageData]);

    
    // Next And Previous Buttons
    const [number, setNumber] = useState(0)
    const previous = () => {
      if(number > 0) {
        setNumber(number - 1)
      }
    }
    const next = () => {
      if(number < Data.length - 1) {
        setNumber(number + 1)
      }
    }

    return (
    <Container>
      {Data && 
        <>
          { menu === "photos" 
              ?  <Image src={`https://image.tmdb.org/t/p/original${Data[number]?.file_path}`} />
              :  <YoutubeIframe src={`https://www.youtube.com/embed/${Data[number]?.key}`} allowFullScreen/>
          }
          <PreviousButton onClick={next}>
            <MdOutlineNavigateNext size={50}/>
          </PreviousButton>
          <NextButton onClick={previous}>
            <MdOutlineNavigateBefore size={50}/>
          </NextButton>
        </>
      }
    </Container>
  )
}

export default Media