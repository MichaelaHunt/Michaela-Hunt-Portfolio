import { Outlet } from 'react-router-dom';
import NavHeader from './components/NavHeader';

function App() {
  return (
    <>
     <NavHeader></NavHeader>
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App
