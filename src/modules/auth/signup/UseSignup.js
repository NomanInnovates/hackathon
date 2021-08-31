import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { doSignUp } from '../../../redux/actions/AuthAction'

export default function useLogin() {
    const [email, setEmail] = useState("")
    const [fnum, setFnum] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [pasword, setPasword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const sendDataToFirebase = {email:email,fnum:fnum,city:city,country:country,pasword:pasword,confirmPassword:confirmPassword}
    const dispatch = useDispatch()
    const doLoginUser = () => {
        console.log(sendDataToFirebase)
        dispatch(doSignUp(sendDataToFirebase))
        
        }
    return [setEmail,setFnum,setCity,setCountry,setPasword,setconfirmPassword ,doLoginUser]
}