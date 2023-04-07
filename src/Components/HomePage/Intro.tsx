import { PropsWithChildren, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import Button from "../UI/Button"
import AOS from "aos"
import "aos/dist/aos.css"

const Intro: React.FC<PropsWithChildren> = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])
  return (
    <section
      data-aos="fade-left"
      className="   md:grid md:grid-flow-col md:justify-between md:pr-10 pt-20   xl:pt-40 container m-auto max-w-6xl px-2"
    >
      <div className="text-center sm:text-left animate-fadeIn">
        <h1 className="xl:text-6xl text-4xl font-semibold dark:text-white text-slate-900 col leading-tight">
          I'm <span className="text-teal-500">Hoang Hieu</span>, A developer
          With passion to teach people around the world.
        </h1>
        <Button onClick={() => {}}>Read The Blogs</Button>
        <Link to="/about" className="block font-semibold group sm:inline-block">
          More about me <span className="hidden group-hover:inline">-</span>
          &gt;
        </Link>
      </div>
      <div className="flex justify-center mt-5 sm:block sm:mt-0">
        <img
          src={logo}
          className="rounded-full border-2 border-white hover:dark:shadow-white hover:shadow-black hover:shadow-2xl transition cursor-pointer"
          alt=""
        />
      </div>
    </section>
  )
}

export default Intro
