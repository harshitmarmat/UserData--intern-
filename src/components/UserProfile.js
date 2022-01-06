import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './UserProfile.module.css'

const UserProfile= (props) => {


    const {
            first_name,
            last_name,
            company_name,
            city,
            state,
            zip,
            email,
            web,
            age 
        } = props.data;
    

    return (
        <Fragment>
            <div className={classes.container}>
                <div>First Name : <p>{first_name}</p></div>
                <div>Last Name : <p>{last_name}</p></div>
                <div>Company Name : <p>{company_name}</p></div>
                <div>City : <p>{city}</p></div>
                <div>State : <p>{state}</p></div>
                <div>Zip : <p>{zip}</p></div>
                <div>Email : <p>{email}</p></div>
                <div>Web : <p><Link className='link' style={{'color' : 'white'}}>{web}</Link></p></div>
                <div>Age : <p>{age}</p></div>
            </div>
        </Fragment>
    )
}

export default UserProfile;