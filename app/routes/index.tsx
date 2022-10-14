import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import Header from "./header";
import Slideshow from "./slideshow";

export default function Index() {
  const user = useOptionalUser();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <Slideshow />
        <div>
          <h2>Apa kata mereka</h2>
          <div>
            <img src="" alt="a" className="rounded-full" />
            <p>Nanda</p>
            <p>Marketing Officer</p>
            <p>Pakuwon Group</p>
            <p>""</p>
          </div>
        </div>

        <div className="bo p-4 text-center">
          <div className="flex justify-between space-x-6 p-6">
            <img
              className="Object-scale-down h-10 w-auto grayscale"
              src="logo-ciputra.svg"
              alt="Ciputra Development"
            />
            <img
              className="Object-scale-down h-10 w-auto grayscale"
              src="logo-pakuwon.svg"
              alt="Pakuwon Group"
            />
            <img
              className="Object-scale-down h-10 w-auto grayscale"
              src="logo-intiland.svg"
              alt="Intiland"
            />
            <img
              className="Object-scale-down h-10 w-auto grayscale"
              src="logo-sinarmas.png"
              alt="Sinarmas Land"
            />
          </div>
        </div>
      </main>
    </>
  );
}
