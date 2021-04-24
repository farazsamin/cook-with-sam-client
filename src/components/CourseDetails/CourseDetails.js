import { useHistory } from 'react-router';
import './CourseDetails.css'
import Slide from 'react-reveal/Slide';
const CourseDetails = (props) => {
    const history = useHistory();
    const {courseName,courseAuthor,imageUrl,coursePrice} =props.name;
    const handleCourse=(name,price)=>{
        history.push(`/checkout/${name}/${price}`) 
    }
    return (
        <div className="col-md-4 mt-3">
        
             <div className="card text-center card-bg border-0">
             <Slide top>
             <img className="mx-auto" style={{borderRadius : '10%'}} src={imageUrl} alt="Card  cap"/>
             </Slide>
                <div className="card-body">
                    <h5 className="card-title">{courseName}</h5>
                    <p className="text-secondary">Description :  {courseAuthor}</p>
                     <span className="text-success mr-5" style={{fontSize : "25px" , fontWeight : 'bold'}}>${coursePrice}</span>
                    <button className="btn btn-success ml-5" onClick={()=>handleCourse(courseName,coursePrice)}>Enroll Now</button>
                </div>
             </div>
            
        </div>
    );
};

export default CourseDetails;