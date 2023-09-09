import React from "react";
import { AiFillAppstore, AiOutlineUnorderedList } from "react-icons/ai";
import { IoAppsSharp } from "react-icons/io5";

const Csbf = (props) => {
  // const [iconSize, setIconSize] = useState({ height: 40, width: 40 });
  const handleChange = (e) => {
    const data = e;
    props.sendDataToParent(data);
  };
  const handleSizeChange = (e) => {
    const data = e;
    console.log(data);
    props.setIconSize({ height: e.height, width: e.width });
    props.setIconSize1();
  };

  return (
    <div className="container mx-auto items-center flex flex-col md:flex-row justify-between p-2 mt-12 mb-[-19.5px]">
      <div className="flex flex-wrap md:space-x-2">
        <button
          className="group bg-white text-black py-2 px-4 rounded-lg flex flex-col items-center transition duration-300 ease-in-out mb-3 relative w-32"
          onClick={() => handleChange("animals")}
        >
          <div className="flex hover">
            <div className="">
              <span className="text-4xl text-blue-500 group-hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height=".5em"
                  viewBox="0 0 512 512"
                  className="text-4xl m-0 p-0"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </span>
              <span className="text-4xl text-blue-500 group-hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height=".5em"
                  viewBox="0 0 512 512"
                  className="text-4xl mb-4 m-0 p-0"
                >
                  <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </span>
            </div>
            <div className="">
              <span className="text-4xl text-blue-500 group-hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height=".5em"
                  viewBox="0 0 512 512"
                  className="text-4xl m-0 p-0"
                >
                  <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
                </svg>
              </span>

              <span className="text-4xl text-blue-500 group-hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height=".5em"
                  viewBox="0 0 512 512"
                  className="text-4xl  m-0 p-0"
                >
                  <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                </svg>
              </span>
            </div>
          </div>

          <span className="text-sm mb-3 cursor-pointer group-hover:text-blue-500">
            Classic
          </span>
          <span className="h-1 w-full bg-blue-500 absolute bottom-0 left-0 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
        </button>

        <button
          className="group bg-white text-black py-2 px-4 rounded-lg flex flex-col items-center transition duration-300 ease-in-out mb-3 relative w-32"
          onClick={() => handleChange("Business")}
        >
          <div className="flex hover">
            <div className="">
              <span className="text-4xl text-blue-500 group-hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height=".5em"
                  viewBox="0 0 512 512"
                  className="text-4xl m-0 p-0"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </span>
              <span className="text-4xl text-blue-500 group-hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height=".5em"
                  viewBox="0 0 512 512"
                  className="text-4xl mb-4 m-0 p-0"
                >
                  <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </span>
            </div>
            <div className="">
              <span className="text-4xl text-blue-500 group-hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height=".5em"
                  viewBox="0 0 512 512"
                  className="text-4xl m-0 p-0"
                >
                  <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
                </svg>
              </span>

              <span className="text-4xl text-blue-500 group-hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height=".5em"
                  viewBox="0 0 512 512"
                  className="text-4xl  m-0 p-0"
                >
                  <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                </svg>
              </span>
            </div>
          </div>

          <span className="text-sm mb-3 cursor-pointer group-hover:text-blue-500">
            Sharp
          </span>
          <span className="h-1 w-full bg-blue-500 absolute bottom-0 left-0 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
        </button>

        <button
          className="group bg-white text-black py-2 px-4 rounded-lg flex flex-col items-center transition duration-300 ease-in-out mb-3 relative w-32"
          onClick={() => handleChange("Camping")}
        >
          <span className="text-4xl text-blue-500 group-hover:text-blue-700">
            <div className="text-4xl mb-4 hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z" />
              </svg>
            </div>
          </span>
          <span className="text-sm mb-3 cursor-pointer group-hover:text-blue-500">
            Brand
          </span>
          <span className="h-1 w-full bg-blue-500 absolute bottom-0 left-0 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
        </button>

        <button
          className="group bg-white text-black py-2 px-4 rounded-lg flex flex-col items-center transition duration-300 ease-in-out mb-3 relative w-32"
          onClick={() => handleChange("Staff")}
        >
          <span className="text-4xl text-blue-500 group-hover:text-blue-700">
            <div className="text-4xl mb-4 hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
              </svg>
            </div>
          </span>
          <span className="text-sm mb-3 cursor-pointer group-hover:text-blue-500">
            Free
          </span>
          <span className="h-1 w-full bg-blue-500 absolute bottom-0 left-0 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
        </button>
      </div>

      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <div className="relative flex-grow">
          <div className="flex items-center gap-4">
            <button
              className="icon-lg"
              onClick={() => props.setIconSize({ height: 100, width: 100 })}
            >
              <AiFillAppstore />
            </button>
            <button
              className="icon-lg"
              onClick={() => props.setIconSize({ height: 40, width: 40 })}
            >
              <IoAppsSharp />
            </button>
            <button
              className="icon-lg"
              onClick={() => props.setIconSize({ height: 20, width: 180 })}
            >
              <AiOutlineUnorderedList />
            </button>
            <select className="bg-transparent text-gray-800 py-3 px-4 pr-12 rounded-lg border-2 border-gray-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 appearance-none">
              <option value="option1">Featured</option>
              <option value="option2">Alphabetical</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative flex-grow">
          <div className="flex items-center gap-2">
            <select className="bg-transparent text-gray-800 py-3 px-4 pr-12 rounded-lg border-2 border-gray-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 appearance-none">
              <option value="option1">6.4.2</option>
              <option value="option2">All Versions</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Csbf;
