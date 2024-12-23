import { Outlet } from "react-router"
import Header from "./component/Header"
import Footer from "./component/Footer"


function MainLayout() {
  return (
    <div className="h-screen">
      <Header/>

        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout