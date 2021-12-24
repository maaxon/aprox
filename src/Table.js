import classes from './table.module.css'

function Table({x_arr,y_arr,cellChangeHandler}) {
    return (
        <div className={classes.table}>
            <div className={classes.col}>
                    <div className={classes.cell}>№</div>
                    {x_arr.map((_,idx)=>{
                        return <div className={classes.cell}>{idx+1}</div>
                    })}
                </div>
               <div className={classes.col}>
                   <div className={classes.cell}>P<sub>1</sub></div>
                    {x_arr.map((x,idx)=>{
                        return <input type={'number'} className={classes.cell} onChange={(e)=>cellChangeHandler(e,'x_arr')} name={idx}  value={x}/>
                    })}
               </div>
                <div className={classes.col}>
                    <div className={classes.cell}>P<sub>1</sub></div>
                    {y_arr.map((y,idx)=>{
                        return <input type={'number'} className={classes.cell} onChange={(e)=>cellChangeHandler(e,'y_arr')}   name={idx} value={y}/>
                    })}
                </div>
        </div>
    );
}

export default Table;