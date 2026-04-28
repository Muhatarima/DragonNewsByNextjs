import Link from "next/link"
import Image from "next/image"
import avatar from"@/assets/user.png"
import NavLink from "./NavLink"


const Navber = () => {
  return (
    <div className=" flex justify-between mt-6 container mx-auto" >
      <div></div>
<ul className="flex gap-3 text-gray-600">
  <li><NavLink href={'/'}  >Home</NavLink></li>
   <li><NavLink href={'/about'}  > About</NavLink></li>
    <li><NavLink  href={'/career'}  >Career</NavLink></li>
</ul>
<div className="flex gap-2 items-center justify-center">
<Image src={avatar} ></Image>
<Link href={'/login'}><button className="btn btn-primary py-1 px-3 bg-gray-900 text-white"  >Login</button>
</Link>
</div>


    </div>
  )
}

export default Navber