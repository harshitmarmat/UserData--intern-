import { useEffect, useState} from "react";
import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import UserPage from "./pages/UserPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserContext from "./store/user-context";

function App() {
  const [userList,setUserList] = useState([])

  useEffect(()=>{

    const fetchHandler = async()=>{
      const response = await fetch('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json');
      
      const data = await response.json();

      setUserList(data);
    }
    fetchHandler();

  },[]);


  return (
    <UserContext.Provider value={{userDataList:userList}}>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/users' />
        </Route>
        <Route path='/users' exact>
          <UserPage/>
        </Route>
        <Route path='/users/:userId'>
          <UserProfilePage/>
        </Route>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
