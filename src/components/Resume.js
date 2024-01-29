import '../css/resume.css';
import MyResume from '../external-files/ResumeJakob2024.pdf'
import BackgroundPhoto from '../images/bg-2.jpeg';

function Resume() {

  return (
    <div className='resume-page'>
      <img className='background-photo' src={BackgroundPhoto} 
           alt='A brick wall'></img>
      <div className='resume-container'>
        <object className='resume' data={MyResume}>My Resume</object>
      </div>
    </div>
  );
}

export default Resume;