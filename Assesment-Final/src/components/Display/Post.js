// import React from "react";
import '../Dashboard/style.css'

// const Post=(props)=>{
//     return(
//         <div>
//             <tr>
//             <td>{props.no}</td>
//             <td>{props.fieldName}</td>
//             <td>{props.datatype}</td>
//             <td>{props.length}</td>
//             <td>{props.mandatory}</td>
//             <td>{props.data}</td>
//             </tr>
//         </div>
//     )
// }

// export default Post;



import React from "react";

const Post = (props) => {
  return (
    <tr>
      <td>{props.no}</td>
      <td>{props.fieldName}</td>
      <td>{props.datatype}</td>
      <td>{props.length}</td>
      <td>{props.mandatory}</td>
      <td>{props.data}</td>
    </tr>
  );
};

export default Post;
