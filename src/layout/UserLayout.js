import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from './UserLayout.module.css';



const UserLayout = (props) => {
    const [searchText,setSearchText] = useState("");
    const history =useHistory()
    const sortHandler = () => {
      history.push('/users/?sort=' + (props.isAscending?'dsc':'asc'));
    }
    
    const searchBarHandler = (event) =>{
        props.onSearch(event.target.value)
    }

    return (
        <Fragment>
            <header className="header">
                <div className="title">Users</div>
            </header>
            <main>
                <div className={classes.main}>
                    <div className={classes.search}>
                        <div className={classes.sorting}>
                            <button onClick={sortHandler}>Sort {props.isAscending?'Descending Order' : 'Ascending Order'} </button>
                        </div>
                        <div className={classes['search-box']}>
                            <input onChange={searchBarHandler} type="text" placeholder="Search.." />
                            <span>
                                <img alt='search' src='https://cdn-icons-png.flaticon.com/512/54/54481.png' />
                            </span>
                        </div>
                    </div>
                    <div className={classes['table-title']}>
                        <p className={classes.fname}>First Name</p>
                        <p className={classes.lname}>Last Name</p>
                        <p className={classes.age}>Age</p>
                        <p className={classes.email}>Email</p>
                        <p className={classes.website}>Website</p>
                    </div>
                </div>
                {props.children}
            </main>
        </Fragment>
    )
}

export default UserLayout;