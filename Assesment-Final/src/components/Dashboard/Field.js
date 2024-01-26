import { React } from "react";
import Display from "../Display/Display";
import { Link } from "react-router-dom";

const Field=()=>{
    return(
        <div>
            <div>
                <p>This is the place where Fields will be displayed</p>
            </div>
            <div>
            <Link className="link" to={'/post'} >Review Posts</Link>
                <Display />
            </div>
        </div>
    );
}


export default Field;