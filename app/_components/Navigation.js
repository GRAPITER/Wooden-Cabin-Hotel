import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className=" z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className={`hover:text-accent-400 transition-colors
             
            `}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex justify-center items-center gap-2 "
            >
              <img
                className="h-8 rounded-full "
                src={session?.user?.image}
                alt={session?.user?.name}
              />{" "}
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}