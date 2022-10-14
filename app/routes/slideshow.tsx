import React from "react";

const colors = ["#FF0000", "#00FF00", "#0000FF"];
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () => setIndex(index === colors.length - 1 ? 0 : index + 1),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <div className="group relative m-8 flex items-center justify-center">
      <div className=" align-center absolute z-10 flex w-full justify-between px-8">
        <div className="rounded-full bg-black px-4 pb-3 text-5xl text-white opacity-0 transition delay-100 duration-300 ease-out group-hover:-translate-x-5 group-hover:opacity-100">
          &#8249;
        </div>
        <div className="rounded-full bg-black px-4 pb-3 text-5xl text-white opacity-0 transition delay-100 duration-300 ease-out group-hover:translate-x-5 group-hover:opacity-100">
          &#8250;
        </div>
      </div>
      <div className="dots absolute bottom-0 left-0 z-10 flex items-center p-2">
        {colors.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`${
              index === i ? "bg-black/80" : "bg-black/50"
            } dot button mx-1 h-2 w-2 rounded-full `}
          ></div>
        ))}
      </div>

      <div className="mx-auto flex h-96 w-full justify-center overflow-hidden rounded-xl bg-green-400">
        <div
          className="slideshowSlider h-[100%] w-[100%] whitespace-nowrap"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((color, i) => (
            <div
              key={i}
              style={{ backgroundColor: color }}
              className={` inline-block h-[100%] w-[100%] flex-row items-center justify-center`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
