import Image from "next/image"
import logo from "../public/lifecatchlogo.png"
export default function Home() {
  return (<>
    <div className="mainHome">
      <div className="navBar">
        <div className="appLogo">
          <Image src={logo} height={30} width={30} alt=""/>
        </div>
        <div className="tags">
          <a href="#lifecatch">Life Catch</a>
          <a href="#ourtarget">Target</a>
          <a href="#subscribe">Subscribe</a>
          <a href="#prototype">Prototype</a>
          <a href="#aboutus">About us</a>
        </div>
      </div>

      a
    </div>
  </>)
}