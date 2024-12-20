
import Hero from "./components/Hero.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

function App() {

  return (
      <div className="flex flex-col min-h-screen">
          <Header/>
          <Hero/>
          <Footer/>
      </div>
  )
}

export default App
