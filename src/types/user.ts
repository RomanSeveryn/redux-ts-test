export interface UserInterface {
  users: any[];
  loading: boolean;
  error: null | string
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCSESS = 'FETCH_USERS_SUCSESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export type UserAction = FetchUserAction | FetchUserSucsessAction | FetchUserErrorAction

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUserSucsessAction {
  type: UserActionTypes.FETCH_USERS_SUCSESS;
  payload: any[]
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}