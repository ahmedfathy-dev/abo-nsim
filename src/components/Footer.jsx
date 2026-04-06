import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#3f4752] text-[#cbd5e1] py-16 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* LEFT */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-indigo-500 w-10 h-10 flex items-center justify-center text-white font-bold rounded">
              M
            </div>
            <h2 className="text-white text-lg font-semibold">
              mangcoding Store
            </h2>
          </div>

          <p className="text-sm leading-7 max-w-md mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis,
            justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor
            dolor augue et lectus.
          </p>

          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center border border-gray-400 text-gray-300 hover:bg-white hover:text-black transition cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>
<div className="w-full gap-10 pl-20 flex">



        {/* Home */}
        <div>
          <h3 className="text-white font-semibold mb-5">Home</h3>
          <ul className="space-y-3 w-full text-sm">
            <li>Product</li>
            <li>Course</li>
            <li>About Us</li>
            <li>Log in</li>
          </ul>
        </div>

        {/* Course */}
        <div>
          <h3 className="text-white font-semibold mb-5">Course</h3>
          <ul className="space-y-3 text-sm">
            <li>HTMK & CSS</li>
            <li>Javascript</li>
            <li>Fotographer</li>
            <li>Desain Grafis</li>
          </ul>
        </div>

        {/* Article + Contact */}
        <div>
          <h3 className="text-white font-semibold mb-6">Article</h3>
          <ul className="space-y-3 text-sm mb-6">
            <li>New</li>
            <li>Old</li>
            <li>Trend</li>
            <li>Popular</li>
          </ul>

         
        </div>
        <div>
          <h3 className="text-white font-semibold mb-5">Contact Us</h3>
          <ul className="space-y-3 text-sm mb-6">
            <li>CCdoc123@gmail.com</li>
          
          </ul>

         
        </div>
</div>

      </div>
    </footer>
  )
}