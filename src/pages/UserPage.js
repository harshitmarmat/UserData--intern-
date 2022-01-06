import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Paginate from "../components/Paginate";
import Users from "../components/Users";
import UserLayout from "../layout/UserLayout";
import UserContext from "../store/user-context";


const sortUserList = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };
  

const UserPage = (props) => {
    const [currentPage,setCurrentPage] = useState(1);
    const [detailPerPage] = useState(10);
    const [searchText,setSearchText]= useState('')

    const ctx = useContext(UserContext);


    const location = useLocation();

    const queryParam = new URLSearchParams(location.search);
    console.log(queryParam.get('sort'));
  
    const isAscending = queryParam.get('sort')==='asc';
  
    const sortedList = sortUserList(ctx.userDataList,isAscending);
    console.log(sortedList);
    const data = sortedList;

    const indexOfLastPage = currentPage * detailPerPage;
    const indexOfFirstPage = indexOfLastPage-detailPerPage;

    const updatedList = data.slice(indexOfFirstPage,indexOfLastPage);
    
    const setPageHandler = (pageNumber)=>{
        setCurrentPage(pageNumber);
        console.log(currentPage);
    }
    const searchHandler =(value)=>{
        console.log(value);
        setSearchText(value);
    }
    return (
        <UserLayout  onSearch={searchHandler} isAscending={isAscending}>
            {searchText && ctx.userDataList.filter((list)=>{
                if(searchText===''){
                    return list;
                }
                else if(list.first_name.toLowerCase().includes(searchText.toLowerCase())){
                    return list;
                }
            }).map((user) =>
            <Users 
                key={user.id}
                id = {user.id}
                firstName={user.first_name}
                lastName={user.last_name}
                age={user.age}
                email={user.email}
                website={user.web}
            />
            )}
            {!searchText && updatedList.map((user) =>
                <Users 
                    key={user.id}
                    id = {user.id}
                    firstName={user.first_name}
                    lastName={user.last_name}
                    age={user.age}
                    email={user.email}
                    website={user.web}
                />
                )}    
            {!searchText && <Paginate  
                pageHandler={setPageHandler}
                activepage={currentPage}
                /> }    
        </UserLayout>
    )
}

export default UserPage;