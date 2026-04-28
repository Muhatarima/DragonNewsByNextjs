import Link from "next/link"
const NotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>

<h2 className='font-bold p-4 mb-4 text-emerald-950 bg-emerald-400 text-5xl italic'>Haha, this page in not found lmao</h2>
<Link href={"/"}>
<button className="btn outline border-green-600 border-2 p-3">Back to Home</button>
</Link>
    </div>
  )
}

export default NotFound
