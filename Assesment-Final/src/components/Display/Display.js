import { React } from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Dashboard/style.css'


const Display = () => {
  const slides = useSelector((state) => state.data.slides);

  const allSlides = slides.map((post) => (
    <Post key={post.no} {...post} />
  ));

  return (
    <div className='dis'>

      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Field Type</th>
            <th>Field Data Type</th>
            <th>Field Validations</th>
            <th>Field Data</th>
            <th>Is Mandatory</th>
          </tr>
        </thead>
        <tbody>{allSlides}</tbody>
      </table>
    
    </div>
  );
};

export default Display;
