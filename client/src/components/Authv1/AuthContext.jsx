import axios from "axios";
import React, { createContext } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const signup = async (username, email, password) => {
        try{
            const response = await axios.post('http://localhost:3003/api/users/register',
            {
                username: username,
                email: email,
                password: password
            });
            if (response.status === 200) {
                console.log(`Logged in as ${username}`);
                console.log(` ${response}`);
            } else {
                console.log("Error");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (username, email, password) => {
     
            const response = await axios.post('http://localhost:3003/api/users/login', 
            {
                email: email,
                password: password
            })
            if (response.status === 200) {
                console.log(`Logged in as ${username}`);
                console.log(`${response}`);
            } 
            else if (response.status === 401) {
                console.log(response.message)
            } else {
                console.log("error");
            }
        
        
    }
    return (
        <AuthContext.Provider value={{signup, login}}>
            { children }
        </AuthContext.Provider>
    );
}
