import { useContext } from "react";
import { AuthContext } from "../auth.context";
import {login,register} from "../services/auth.api"
import { useNavigate } from "react-router-dom";


export const useAuth = ()=>{
    const context = useContext(AuthContext)
    const {user,setUser,loading,setLoading }=context

    const handleLogin = async (email, password) => {
    try {
        setLoading(true)

        const response = await login(email, password)

        setUser(response.user)

    } catch (error) {
        console.log(error.response?.data)
        throw error
    } finally {
        setLoading(false)
    }
}

    const handleRegister = async ( username, email, password) => {
        try {
            setLoading(true);

            const response = await register(
               
                username,
                email,
                password
            );

            setUser(response.user);

            return response;
        } finally {
            setLoading(false);
        }
    };
    return{
        user,loading,handleLogin,handleRegister
    }
}