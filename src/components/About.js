import '../css/about.css';
import BioPhoto from '../images/pfp-test-1.jpeg';
import BackgroundPhoto from '../images/bg-2.jpeg';

function About() {

  return (
    <div className='about-page'>
      <img className='background-photo' src={BackgroundPhoto} 
           alt='A brick wall'></img>
      <div className='about-container'>
        <div className="about-image-container">
          <img className='bio-photo' src={BioPhoto} 
              alt='Headshot of Jakob standing in front of a wall'></img>
        </div>
        <div className="about-bio-container">
          <p className='bio'>&emsp;My name is Jakob Patino. I am an entry level front end web developer
                             from Orange County. I am 25 years old and have a bachelor's degree
                             in computer science from Cal State Fullerton University.
                             <br></br>
                             <br></br>
                             &emsp;In terms of web development I have experience using HTML, CSS,
                             Javascript, React, and Redux. Additionally, I have experience using Python,
                             and to a lesser extent, C++ and Java
                             <br></br>
                             <br></br>
                             &emsp;As for hobbies outside of the developer world, I spend my free
                             time hanging out with friends, playing video games, board games,
                             and Magic: The Gathering. I also enjoy reading manga, playing
                             Dungeons and Dragons, and exploring nature through camping and
                             hiking.</p>
        </div>
      </div>
    </div>
  );
}

export default About;