import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:3000",
    headers:{
        "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmVlMjYyMzNmN2Q5NDI0NzU5NWE3ODYiLCJ1c2VybmFtZSI6ImFkbWluIiwibmFtYSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjEwMTA4NzQyLCJleHAiOjE2MTAyODE1NDJ9.BvHuVcsmNb1q8cRHpB2JeqIpW2nLd17YB1_yQ6dutB8"
    }
    
})

export default instance