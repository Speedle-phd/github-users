import React, { useState, useEffect} from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import { useLocalStorage } from '../customHooks/useStorage';
import { useCallback } from 'react';

const rootUrl = 'https://api.github.com';
const userUrl = '/users/'
const rateUrl = 'https://api.github.com/rate_limit'

const GithubContext = React.createContext()





const GitHubProvider = ({children}) => {
 const [ghUser, setGhUser ] = useLocalStorage('user', mockUser)
 const [repos, setRepos] = useLocalStorage('userRepos', mockRepos)
 const [followers, setFollowers] = useLocalStorage('userFollowers', mockFollowers)
 const [requests, setRequests] = useLocalStorage('userRequests', 0)
 const [error, setError] = useState({err: false, msg: ""})
 const [loading, setLoading] = useState(false)
//  const mountRef = useRef(true)

 const getRatelimit = useCallback(async() => {
  try {
   const {
     data: {
       resources: {
         core: { limit, used },
       },
     },
   } = await axios.get(rateUrl)
   setRequests(() => {
    return [used, limit]
   })
   if(used >= 60) {
    toggleError(true, 'Ran out of API Requests')
    throw new Error(error.msg)
   } else {
    toggleError()
   }
  } catch (error) {
   console.log(error)
  }
 }, [error, setRequests])
 const toggleError = (is = false, msg = "") => {
  setError({err: is, msg: msg})
 }

 const getNewUser = useCallback(async(input) => {
   try {
     toggleError()
     setLoading(true)
     let url = `${rootUrl}${userUrl}${input}`

     const { data } = await axios.get(url)
     Promise.allSettled([
       axios.get(`${ghUser.followers_url}?per_page=100`),
       axios.get(`${ghUser.repos_url}?per_page=100`),
     ])
       .then((results) => {
         const [followers, repos] = results
         console.log(results, repos, followers)
         const status = 'fulfilled'
         if (repos.status === status) {
           setRepos(repos.value.data)
         }
         if (followers.status === status) {
           console.count()
           setFollowers(followers.value.data)
         }
       })
       .catch((err) => console.log(err))
       .finally(() => setLoading(false))

     setGhUser(data)
   } catch (err) {
     console.log(err)
     toggleError(true, 'No user was matching your search')
     console.log(error)
     setLoading(false)
   }
   // eslint-disable-next-line
 }, [ghUser])

 // const getFollowers = async() => {
 //  const { data } = await 
 //  setFollowers(data)
 // }
 // const getRepos = async() => {
 //  let url = 
 //  const {data} = await 
 //  setRepos(data)
 // }

// useEffect(() => {
//  console.count()
//   if (!mountRef.current) {
//    getRepos()
//    getFollowers()
//   }
//   mountRef.current = false
// }, [ghUser])

useEffect(() => {
 getRatelimit()

}, [ghUser, getRatelimit])

 return <GithubContext.Provider value={{
  loading, error, getNewUser,
  requests,
  setGhUser,
  rootUrl,
  userUrl,
  followers, 
  repos, 
  ghUser,
  test: "test"
  }}>
  {children}
 </GithubContext.Provider>

}


export {GitHubProvider, GithubContext}

