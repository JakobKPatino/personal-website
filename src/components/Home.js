import '../css/home.css';
import BackgroundPhoto from '../images/bg-1.jpeg';

function Home() {

  return (
    <div className='home-page'>
      <img className='background-photo' src={BackgroundPhoto} 
           alt='Jakob standing in front of a wall'></img>
      <div className='home-container'>
        <div className='home-text-container'>
          <div className='home-text-header-container'>
            <p className='home-text-intro'>Hi, I'm Jakob, a</p>
            <p className='home-text-header'>Front-End Web Developer</p>
            <p className='home-text-bio'>
              I'm a hard working, entry level React developer from Orange County.
              I am determined to learn from and to enhance any team I work with.
            </p>
          </div>
          <p className='home-text-contact'> Contact Me: jakobpatino@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Home;