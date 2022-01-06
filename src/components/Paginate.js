import classes from './Pagination.module.css'
const Paginate = (props) => {
    const pages = [1,2,3,4,5,6,7,8,9,10];

    const pageHandler =(number)=>{
        props.pageHandler(number);
    }
    return (
        <div className={classes.pagination}>
            {pages.map((page)=><li className={page===props.activepage?classes.active:''} key={page} onClick={()=>pageHandler(page)}>{page}</li>)}
        </div>
    )
}

export default Paginate;