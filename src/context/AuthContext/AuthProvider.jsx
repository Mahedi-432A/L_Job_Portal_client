import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(email, password)
    }

    const authInfo = {
        loading,
        register
    };

  return (
    <AuthContext value={authInfo}>
        {
            children
        }
    </AuthContext>
  )
}

export default AuthProvider