import { lazy, PropsWithChildren } from "react"
import { Route, Routes } from "react-router-dom"
// import Blog from "../About/Blog"
// import SmallIntro from "../About/SmallIntro"
// import Techs from "../About/Techs"
// import Login from "../Auth/PopUp/Login"
// import Contact from "../Contact/Contact"
const Blog = lazy(() => import("../About/Blog"))
const SmallIntro = lazy(() => import("../About/SmallIntro"))
const Techs = lazy(() => import("../About/Techs"))
const Login = lazy(() => import("../Auth/PopUp/Login"))
const Contact = lazy(() => import("../Contact/Contact"))
const Intro = lazy(() => import("../HomePage/Intro"))
const Publisher = lazy(() => import("../HomePage/Publisher"))
const Update = lazy(() => import("../HomePage/Update"))
const CreateBlog = lazy(() => import("../createBlog/CreateBlog"))

// import Intro from "../HomePage/Intro"
// import Publisher from "../HomePage/Publisher"
// import Update from "../HomePage/Update"
import mario from "../../assets/mario.jpg"
import Undertale from "../../assets/Undertale.png"
// import CreateBlog from "../createBlog/CreateBlog"
const loadedData = [
  {
    imageSrc: mario,
    title: "Mario - Side-Scrolling Game",
    date: "December 13,2022",
  },
  {
    imageSrc: Undertale,
    title: "Undertale",
    date: "February 13,2022",
  },
  {
    imageSrc: mario,
    title: "Mario - Side-Scrolling Game",
    date: "December 13,2022",
  },
]

const AllRoutes: React.FC<PropsWithChildren> = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Intro />
            <span className="text-center block text-2xl my-10">∿∿∿</span>
            <Publisher articles={loadedData} />
            <span className="text-center block text-2xl my-10">∿∿∿</span>
            <Update />
            <hr className="container m-auto max-w-6xl px-2 my-10" />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <SmallIntro />
            <span className="text-center block text-2xl my-5">∿∿∿</span>

            <Techs />
            <span className="text-center block text-2xl my-5">∿∿∿</span>
            <Blog articles={loadedData} />
            <hr className="container m-auto max-w-6xl px-2 my-10" />
          </>
        }
      />
      <Route
        path="/create-blog"
        element={
          <>
            <CreateBlog />
          </>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AllRoutes
