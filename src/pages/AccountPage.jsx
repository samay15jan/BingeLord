import React, {useEffect } from 'react'
import Accounts from '../components/accountpage/Accounts'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AccountPage = () => {
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
      <Accounts/>
    </div>
  )
}

export default AccountPage