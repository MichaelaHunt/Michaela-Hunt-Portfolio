import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='site'>
        <Header></Header>
          <Outlet />
      </div>
    </>
  );
}

export default App
