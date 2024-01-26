import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { json } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addSlide } from '../store/dataStore';

const Add=()=>{

    const dispatch = useDispatch();
    const slides = useSelector((state) => state.data.slides);
    console.log("They are" + slides);
    

    const [selectbox,setselectbox]=useState('selectbox');
    const [visible,setVisible]=useState(1);
    const [selectedValue,setSelectedValue]=useState('selectbox');
    const [textbox,settextbox]=useState('textbox');
    const [remain_show,setremain_show]=useState('remain_show');
    const [dropdown,setdropdown]=useState('dropdown');
    const [datepicker,setdatepicker]=useState('datepicker');

    console.log(slides)

    const [Mandatory,setMandatory]=useState("Yes");
    const [fieldDisplayName, setFieldDisplayName] = useState('');
    const [fieldDataType, setFieldDataType] = useState('Number');
    const [fieldMaxLength, setFieldMaxLength] = useState(0);
    const [fieldData, setFieldData] = useState('');


    const changeinputHandler=(e)=>{
        if(e.target.name ==='fieldDisplayName'){
            setFieldDisplayName(e.target.value)
        }
        if(e.target.name ==='fieldDataType'){
            setFieldDataType(e.target.value)
        }
        if(e.target.name ==='fieldMaxLength'){
            setFieldMaxLength(e.target.value)
        }
        if(e.target.name ==='fieldData'){
            setFieldData(e.target.value);
        }
        
    }
 

    const handleSelectChange2=async(e)=>{
        setMandatory(e.target.value);
    }

    const handleSelectChange=async(e)=>{
        setSelectedValue(e.target.value);
    }
    useEffect(()=>{
        if (selectedValue === 'Textbox') {
            settextbox('textbox-visible');
            setdropdown('dropdown');
            setdatepicker('datepicker');
            setremain_show("remain_show_visible")
        } else if (selectedValue === 'Dropdown') {
            setdropdown('dropdown-visible');
            setdatepicker('datepicker');
            settextbox('textbox');
            setremain_show("remain_show_visible")
        } else if (selectedValue === 'Datepicker') {
            setdatepicker('datepicker-visible');
            settextbox('textbox');
            setdropdown('dropdown');
            setremain_show("remain_show_visible")
        } else {
            setdropdown('dropdown');
            settextbox('textbox');
            setdatepicker('datepicker');
            setremain_show("remain_show")
          }

    },[selectedValue])

    const handleConfirm=()=>{
        const newSlide = {
            no: slides.length + 1,
            fieldName: fieldDisplayName,
            datatype: fieldDataType,
            length: fieldMaxLength,
            mandatory: Mandatory,
            data: fieldData,
        };
        
        dispatch(addSlide(newSlide));
    }


    const changeHandler=async(e)=>{
        setVisible(!visible);
        visible==1?setselectbox("selectbox-visible"):setselectbox("selectbox")
        setdropdown('dropdown');
        settextbox('textbox');
        setdatepicker('datepicker');
    }
    return(
        <div>
            <div>
                <button className='button' onClick={changeHandler}>Add Field</button>
            </div>
            <div className={selectbox}>
                <div className='dropdown-container'>
                    <select name="select" value={selectedValue} onChange={handleSelectChange}>
                        <option value="">Select...</option>
                        <option value="Textbox">Textbox</option>
                        <option value="Dropdown">Dropdown</option>
                        <option value="Datepicker">Datepicker</option>
                    </select>
                </div>
                <div className={textbox}>
                    
                    <div>
                        <p>Field Display Name</p>
                        <input value={fieldDisplayName} type='text' name='fieldDisplayName' placeholder='Mobile' onChange={changeinputHandler}></input>
                    </div>
  

                </div>
                <div className={dropdown}>
                    

                    <input name='fieldDisplayName' type='text'  value={fieldDisplayName} placeholder='Dropdown' onChange={changeinputHandler}></input>
                </div>
                <div className={datepicker}>
            

                    <input value={fieldDisplayName}  type='text' name='fieldDisplayName'  placeholder='Date' onChange={changeinputHandler}></input>
                </div>
                <div className={remain_show}>
                    <div>
                        <p>Field Data Type</p>
                        
                        <div className='dropdown-container'>
                            <select name="select" value={fieldDataType}>
                                <option value="Number">Number</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p>Field Max Length Allowed</p>
                        <input name='fieldMaxLength' type='number'  value={fieldMaxLength} placeholder='' onChange={changeinputHandler} ></input>
                        
                    </div>

                    <div>
                        <p>Mandatory</p>
                        <div className='dropdown-container'>
                            <select name="select" value={Mandatory} onChange={handleSelectChange2}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option> 
                            </select>
                        </div>
                       
                    </div>
                    <div>
                        <p>Field Data</p>
                        <input value={fieldData} type='text' name='fieldData' placeholder='Field Data' onChange={changeinputHandler}></input>
                    </div>
                    <div>
                        <button className='button' onClick={handleConfirm}>Confirm</button>
                    </div>
                </div>
                
                
            </div>

        </div>
    );
}

export default Add;