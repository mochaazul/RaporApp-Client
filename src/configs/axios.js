import axios from 'axios'

const instance = axios.create({
  baseURL: "http://smkalhidayah.ddns.net:10050",
  headers: {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA0MjUwMzczMTQ1MjY3ZmI3ZjU5YTkiLCJ1c2VybmFtZSI6ImFkbWluIiwibmFtYSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjEwODg0MzU5LCJleHAiOjE2MTEwNTcxNTl9.KUku0oGIjLtfdUBMbZy3CnjsWz069niISbF9ALZveHQ"
  }

})

export default instance