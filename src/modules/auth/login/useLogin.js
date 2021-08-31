import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { doLogin } from '../../../redux/actions/AuthAction'

export default function useLogin() {
    const [email, setEmail] = useState("")
    const [pasword, setPasword] = useState("")
    const dispatch = useDispatch()
    const doLoginUser = () => {
        console.log(email,pasword)
        dispatch(doLogin(email,pasword))
        
        }
    return [setEmail,setPasword ,doLoginUser]
}

// export default useLogin
