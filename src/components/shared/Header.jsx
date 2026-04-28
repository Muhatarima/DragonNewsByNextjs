import logo from "@/assets/logo.png"
import { format, compareAsc } from "date-fns";


import Image from "next/image";
const Header = () => {
  return (
    <div className="text-center py-8 space-y-2">
<Image src={logo} height={200} width={300} alt="logo" className='mx-auto' />
<p>
  Journalism without fear or favour
</p>
<p>{format(new Date(), "EEEE   , MMM dd , yyyy")}</p>

    </div>
  )
}

export default Header