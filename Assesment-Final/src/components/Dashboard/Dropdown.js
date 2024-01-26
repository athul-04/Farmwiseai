import { React } from "react";

const Dropdown=()=>{
    return(
        <div>
            <div>
                <p>Dynamic Data Collection</p>
            </div>
            <div>
            <div className="dropdown-container">
                

                <select >
                    <option value="">Select</option>
                    <option value="Student">Student</option>
                    <option value="Salaried">Salaried</option>
                    <option value="Business">Busines</option>
                </select>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;