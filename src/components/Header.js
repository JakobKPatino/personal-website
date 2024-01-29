import '../css/header.css';
import LinkedinLogo from '../images/linkedin-logo.png';
import GithubLogo from '../images/github-logo.png';

function Header({setVisiblePage}) {

  function handleVisiblePage(page) {
    document.getElementById('Home').setAttribute('style', 'font-weight: normal; text-decoration: none');
    document.getElementById('About').setAttribute('style', 'font-weight: normal; text-decoration: none');
    document.getElementById('Resume').setAttribute('style', 'font-weight: normal; text-decoration: none');
    document.getElementById('Projects').setAttribute('style', 'font-weight: normal; text-decoration: none');

    setVisiblePage(page);

    document.getElementById(page).setAttribute('style', 'font-weight: bold; text-decoration: underline');
  }

  return (
    <div className='header-container'>

      <div className='header-title-container'>
        <h1 className='header-title'>Jakob Patino</h1>
      </div>

      <div className="header-internal-buttons-container">
        <button className='home-button' id='Home' onClick={() => handleVisiblePage('Home')}>Home</button>
        <button className='about-button' id='About' onClick={() => handleVisiblePage('About')}>About</button>
        <button className='resume-button' id='Resume' onClick={() => handleVisiblePage('Resume')}>Resume</button>
        <button className='projects-button' id='Projects' onClick={() => handleVisiblePage('Projects')}>Projects</button>
      </div>

      <div className="header-external-buttons-container">

        <a className='github-button-link' href='https://github.com/jakobkpatino' 
           target='_blank' rel='noreferrer'>
          <button className='github-button'>
            <img className='github-button-image' src={GithubLogo} alt='github icon'></img>
          </button>
        </a>
        
        <a className='linkedin-button-link' href='https://www.linkedin.com/in/jakob-patino-a4a31b266/' 
           target='_blank' rel='noreferrer'>
          <button className='linkedin-button'>
            <img className='linkedin-button-image' src={LinkedinLogo} alt='linkedin icon'></img>
          </button>
        </a>
        
      </div>

    </div>
  );
}

export default Header;