import React from 'react'
import Main from '../components/contentpage/Main'
import { useParams } from 'react-router-dom';

const ContentPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Main id={id}/>
    </div>
  )
}

export default ContentPage