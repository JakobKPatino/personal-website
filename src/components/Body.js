import '../css/body.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';

function Body({visiblePage}) {

  return (
    <div className='body-container'>
      {visiblePage === 'Home' && <Home />}
      {visiblePage === 'About' && <About />}
      {visiblePage === 'Resume' && <Resume />}
      {visiblePage === 'Projects' && <Projects />}
    </div>
  );
}

export default Body;