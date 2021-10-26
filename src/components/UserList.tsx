import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUser } from '../store/action-creators/user';


const UserList: React.FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchUser())
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
  }
  
  return (
    <div>
      {users.map(user => 
        <div key={user}>{user.name}</div>
        )}
    </div>
  );
}

export default UserList;