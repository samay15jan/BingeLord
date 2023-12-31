import React, { useEffect } from 'react'
import Main from '../components/contentpage/Main'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ContentPage = () => {
  const { id } = useParams();
    // Auto Redirect
    const navigate = useNavigate()
    const auth = getAuth()
    useEffect(() => {
      onAuthStateChanged(auth, user => {
        if (!user) {
          navigate('/auth')
        }
      })
    },[auth, navigate])
  return (
    <div>
      <Main id={id}/>
    </div>
  )
}

export default ContentPage