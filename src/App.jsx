import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1 bg-amber-100'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App;