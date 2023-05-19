import Link from "next/link";

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5 font-poppins">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="logo"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white duration-500 hover:bg-green-700">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="cursor-pointer">Sign In</h3>
        <h3 className="cursor-pointer rounded-full border border-green-600 px-4 py-1 duration-200 hover:bg-green-600 hover:text-white">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
