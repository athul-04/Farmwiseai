import { React } from "react";
import "./style.css";
import Dropdown from "./Dropdown";
import Add from "./Add";
import Field from "./Field";
import { reFrame } from '../store/dataStore';
import { useDispatch, useSelector } from 'react-redux';


const DashBoard=()=>{
    const dispatch = useDispatch();
    const slides = useSelector((state) => state.data.slides);


    const resetHandler=()=>{
        dispatch(reFrame(slides));
    }




    return(
        <div>
            <Dropdown />
            <Add />
            <Field />

            <button className="button" onClick={resetHandler}>Reset</button>

        </div>
        
    );
}

export default DashBoard;