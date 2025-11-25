import Header from "./components/Header"
import Maintop from "./components/Maintop"
import Mainbottom from "./components/Mainbottom"
import Footertop from "./components/Footertop"
import Footerbottom from "./components/Footerbottom"


function App() {

  return (
    <>
     <Header></Header>
      <main>
        <Maintop></Maintop>
        <Mainbottom></Mainbottom>
      </main>
      <footer>
        <Footertop></Footertop>
        <Footerbottom></Footerbottom>
      </footer>
    </>
  )
}

export default App
