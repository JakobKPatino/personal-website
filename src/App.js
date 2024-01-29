import './css/App.css';
import Body from './components/Body'
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const [visiblePage, setVisiblePage] = useState('Home');

  return (
    <div className="App">
      <Header setVisiblePage={setVisiblePage}/>
      <Body visiblePage={visiblePage}/>
    </div>
  );
}

export default App;
