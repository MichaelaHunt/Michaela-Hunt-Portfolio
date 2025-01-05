import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Header></Header>
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App
