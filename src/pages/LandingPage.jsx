import React, { useEffect } from 'react'
import Main from '../components/landingpage/Main'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const LandingPage = () => {
    // Auto Redirect
    const navigate = useNavigate()
    const auth = getAuth()
    useEffect(() => {
      onAuthStateChanged(auth, user => {
        if (user) {
          navigate('/movies')
        }
      })
    },[auth, navigate])

  return (
    <div>
      <Main />
    </div>
  )
}

export default LandingPage