import { Link } from 'react-router-dom';
import classes from './Users.module.css'

const Users = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes['table-title']}>
                
                <p className={classes.fname}>
                <Link className='link' to={`/users/${props.id}`}>{props.firstName}</Link>
                </p>
                <p className={classes.lname}>{props.lastName}</p>
                <p className={classes.age}>{props.age}</p>
                <p className={classes.email}>{props.email}</p>
                <p className={classes.website}>
                    <Link target='_blank' className='link' to={props.website}>
                        {props.website}
                    </Link>    
                </p>
            </div>
        </div>        
    )
}

export default Users;