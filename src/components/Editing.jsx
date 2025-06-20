import "../App.css";

function Editing({ visible, boxes }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 my-0  h-full">
      <div className="flex flex-row flex-wrap items-center justify-center mx-auto gap-4 h-full max-w-[430px]">
        {visible ? (
          boxes.map((box) => (
            <div
              key={box}
              className="w-24 h-24 boxImage"
              //   className="w-24 h-24 bg-blue-400 flex items-center justify-center text-white font-bold rounded my-0 py-0 row-gap-0"
            >
              {box}
            </div>
          ))
        ) : (
          <div className="flex flex-row flex-wrap justify-center items-start mx-auto mt-0 gap-4 h-full sm:min-w-[450px]  text-center"></div>
        )}
      </div>
    </div>
  );
}

export default Editing;
