import UserContext from "./user-context";


const UserProvider = (props) => {
    // const [dataList,setDataList] = useState([]);

    // const setDataListHandler = (userList)=>{
    //     console.log(userList);
    //     setDataList(userList);
    // }

    const initialList = {
        userDataList : []
    }

    return (<UserContext.Provider value={initialList}>
        {props.children}
    </UserContext.Provider>)
}

export default UserProvider;