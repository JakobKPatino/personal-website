import '../css/projects.css';
import BackgroundPhoto from '../images/bg-2.jpeg';

function Projects() {

  return (
    <div className='projects-page'>
      <img className='background-photo' src={BackgroundPhoto} 
           alt='A brick wall'></img>
      <div className='projects-container'>
        
        <div className='rubiks-project-container'>
          <div className='project-name-container'>
            <p className='project-name'>Rubik's Cube Solver</p>
          </div>
          <div className="project-contents-container">
            <p className='project-description'>
                This website allows a user to play with a digital rubik's cube. It also includes a random shuffler and an automatic solver.
            </p>
            <div className="uses-and-link-container">
              <p className='uses-text'>Uses: HTML, CSS, Javascript</p>
              <a className="visit-project-link" 
                href='https://jakobkpatino.github.io/rubiks-cube-solver-website/'
                target='_blank' rel='noreferrer'>
                <button className='visit-project-button'>Visit Project</button>
              </a>
            </div>
          </div>
        </div>

        <div className='collection-project-container'>
          <div className='project-name-container'>
            <p className='project-name'>Collection Tracker</p>
          </div>
          <div className="project-contents-container">
            <p className='project-description'>
              This website allows a user to digitally keep a log of any collections they may have. It is able to handle multiple user accounts, stored locally.
            </p>
            <div className="uses-and-link-container">
              <p className='uses-text'>Uses: HTML, CSS, Javascript, React</p>
              <a className="visit-project-link" 
                href='https://jakobkpatino.github.io/collection-tracker/'
                target='_blank' rel='noreferrer'>
                <button className='visit-project-button'>Visit Project</button>
              </a>
            </div>
          </div>
        </div>

        <div className='typing-project-container'>
          <div className='project-name-container'>
            <p className='project-name'>Typing Game</p>
          </div>
          <div className="project-contents-container">
            <p className='project-description'>
                This website allows a user to play a typing game with multiple difficulties, keeping track of their high scores. It is able to handle multiple, password protected, user accounts with unique usernames, stored locally.
            </p>
            <div className="uses-and-link-container">
              <p className='uses-text'>Uses: HTML, CSS, Javascript, React, Redux</p>
              <a className="visit-project-link" 
                href='https://jakobkpatino.github.io/typing-game-app/'
                target='_blank' rel='noreferrer'>
                <button className='visit-project-button'>Visit Project</button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;