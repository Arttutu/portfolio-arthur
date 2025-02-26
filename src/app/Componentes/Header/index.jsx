import Menu from "../NavBar"
import Tema from "../ToogleTema"

export default function Header({ mobile }) {
  return (
    <div
      className={`${mobile ? "flex md:hidden" : "hidden md:block"} 
       md:flex items-center justify-between`}
    >
      <Menu />
      <Tema />
    </div>
  )
}
