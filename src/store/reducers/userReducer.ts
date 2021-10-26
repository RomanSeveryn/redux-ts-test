import { UserAction, UserActionTypes, UserInterface } from "../../types/user"

const initialState: UserInterface = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserInterface => {
switch (action.type) {
  case UserActionTypes.FETCH_USERS: {
    return {
      loading: true,
      error: null,
      users: []
    }
  }
  case UserActionTypes.FETCH_USERS_SUCSESS: {
    return {
      loading: false,
      error: null,
      users: action.payload
    }
  }
  case UserActionTypes.FETCH_USERS_ERROR: {
    return {
      loading: true,
      error: action.payload,
      users: []
    }
  }
  default: 
  return state
}
}