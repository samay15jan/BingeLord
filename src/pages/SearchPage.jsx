import React, { useEffect } from 'react'
import Search from '../components/searchpage/Search'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SearchPage = () => {
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
      <Search />
    </div>
  )
}

export default SearchPage