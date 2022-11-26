import { useContext } from "react"
import { GithubContext } from "../context/context"

const useGlobalContext = () => {
  return useContext(GithubContext)
}
export default useGlobalContext
