import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import Link from "next/link";

export default async function Header() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  const user = await getUser();

  return (
    <header className="p-4  border-b text-black bg-white border-gray-600  flex justify- items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="dropdown flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black mt-7 top-5 left-4 dropdown-content bg-base-100 rounded-box z-[1]  w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/dashboard">Profile</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/" className="text-lg font-bold">
              Blog Viewer
            </Link>
          </div>
        </div>
        <nav className="gap-4 hidden lg:flex">
          <Link className="hover:underline cursor-pointer" href="/">
            Home
          </Link>
          <Link
            className="hover:underline cursor-pointer"
            href={`${user ? "/dashboard" : "/api/auth/login"}`}
          >
            Profile
          </Link>
        </nav>
        <div className="flex gap-4">
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.picture}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">{user?.given_name}</a>
                </li>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <LogoutLink postLogoutRedirectURL="">Logout</LogoutLink>
                </li>
              </ul>
            </div>
          ) : (
            <LoginLink postLoginRedirectURL="/dashboard">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Login
              </button>
            </LoginLink>
          )}
        </div>
      </div>
    </header>
  );
}
