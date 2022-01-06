import { Fragment } from "react"
import { Link } from "react-router-dom";
import classes from "./UserProfileLayout.module.css"

const UserProfileLayout = (props) =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <div className="title">{props.name}'s Detail </div>
                <div>
                    <Link to='/users' className="link">
                        <img alt="back-arrow" src="https://as1.ftcdn.net/v2/jpg/03/08/33/44/1000_F_308334444_a03jdKtCxp1RbqvMQsz6zdaCNTTxhaK7.jpg" />
                        <p>Back to List</p>
                    </Link>
                </div>
            </header>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default UserProfileLayout;