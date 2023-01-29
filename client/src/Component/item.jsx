import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const Item=({text,updatetask,deletetask})=>{
    return (
        <div className="item">
            <div className="text"> {text}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={updatetask}/>
                <AiFillDelete className="icon" onClick={deletetask}/>
            </div>
        </div>
    )
}

export default Item