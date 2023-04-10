import React, {useState , useEffect} from 'react'
import Loader from './components/Loader';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Chef from './components/Chef';
import Awards from './components/Awards';
import Photo from './components/Photo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect (() => {
    setTimeout(() => {
      setLoading(false)
    }, 90000);
  }, [])

  return (
    <>
    { loading ? <Loader loading={loading}/> :
    <>
      <Home/>
      <About/>
      <Menu/>
      <Chef/>
      <Awards/>
      <Photo/>
      <Contact/>
      <Footer/>
    </>
    }
    </>
  )
}

export default App
