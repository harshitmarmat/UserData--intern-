import { useContext } from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import UserProfileLayout from "../layout/UserProfileLayout";
import UserContext from "../store/user-context";



const UserProfilePage = () => {
    const ctx = useContext(UserContext);
    const param = useParams();
    // console.log(param.userId);
    console.log(param.userId);
    console.log(ctx.userDataList);
    let userData = ctx.userDataList.find((user)=>
        {   
            // console.log(user.id);
            return user.id.toString() === param.userId});
    if(!userData){
        return (
            <p>No record Found</p>
        )
    }
    // console.log(userData);
    return (
        <UserProfileLayout name={userData.first_name} >
            <UserProfile data={userData}/>
        </UserProfileLayout>
    )
}

export default UserProfilePage;