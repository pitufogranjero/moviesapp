import './App.css';
import { useState } from 'react';
import { MyRoutes } from './routers/routes'
import { SearchBar } from './components/SearchBar'; 
import { LandingPage } from './pages/LandingPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  // const searchQuery = 'rocky'

  // console.log(searchQuery)
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='title'>The<br/>Movie<br/>Tracker</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      {/* <LandingPage searchQuery={searchQuery} /> */}

      <MyRoutes searchQuery={searchQuery}/>
    
    </div>
  );
}

export default App;
