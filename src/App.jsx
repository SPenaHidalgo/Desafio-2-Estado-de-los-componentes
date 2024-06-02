import Register from './components/Register'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <>
      <Header />
      <div className='pb-5'>
        <Register />
      </div>
      <Footer />
    </>
  )
}

export default App
