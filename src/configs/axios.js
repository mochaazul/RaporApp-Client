import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:3000",
    headers:{
        "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZhZDU4MDJhMmQ3MTZiZWEyMzYyYjciLCJ1c2VybmFtZSI6ImFkbWluIiwibmFtYSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjEwMjc0NDc3LCJleHAiOjE2MTA0NDcyNzd9.pkZqKiZ6KCks_pLSA6md1Az_3hxfsWCEdS2BTjYYDCg"
    }
    
})

export default instance