import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"


export const fetchUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response: any = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
      dispatch({type: UserActionTypes.FETCH_USERS_SUCSESS, payload: response.data})
      }, 500)      
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Error'
      })
    }
  }
}