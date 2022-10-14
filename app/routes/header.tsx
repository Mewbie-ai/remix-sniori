import { Link } from "react-router-dom";
import { useOptionalUser } from "~/utils";

export default function Header() {
  const user = useOptionalUser();
  return (
    <>
      <h1 className="text-xm bg-neutral-900 p-1 text-center font-bold text-white">
        {user
          ? "Selamat datang kembali, " + user.email
          : "Selamat datang di Sniori"}
      </h1>
      <nav>
        <div className="flex items-center justify-between p-1 px-6">
          <div>
            <Link to="../">
              <img src="logo-sniori.png" alt="Logo" className=" max-h-14" />
            </Link>
          </div>
          <div>
            <Link to="products" className="px-6 font-bold hover:underline">
              PRODUK
            </Link>
            <a
              href="https://wa.me/628113277721"
              className="px-6 font-bold hover:underline"
            >
              CHAT WHATSAPP
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
