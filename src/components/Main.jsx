import React, { useState } from "react";
import iconsData from "../iconData";
import Csbf from "./Csbf";
import Main2 from "./Main2";

const Main = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const [iconSize, setIconSize] = useState({ height: 40, width: 40 });
  const [iconSize1, setIconSize1] = useState("w-32 h-32");

  const toggleIconSize = () => {
    // Toggle between w-32 h-32 and w-64 h-64
    setIconSize1(iconSize1 === "w-32 h-32" ? "w-64 h-64" : "w-32 h-16");
  };

  const [filter, setFilter] = useState("");
  const [filteredIcons, setFilteredIcons] = useState(iconsData);

  const handleCategoryFilter = (category) => {
    // Check if the category is already active
    if (activeCategories.includes(category)) {
      // Category is already active, so deactivate it
      const updatedCategories = activeCategories.filter((c) => c !== category);
      setActiveCategories(updatedCategories);
    } else {
      // Category is not active, so activate it
      setActiveCategories([...activeCategories, category]);
    }
  };

  const dataFromChild = (data) => {
    setFilter(data);
    const filtered = iconsData.filter((icon) => icon.category === data);
    setFilteredIcons(filtered);
    setIconSize({ height: 40, width: 40 });
    setIconSize1("w-32 h-32");
  };

  // Filter icons based on active categories and filter text
  const selectedIcons = filteredIcons.filter((icon) => {
    if (activeCategories.length === 0) {
      return true; // No active categories, show all icons
    }
    return activeCategories.includes(icon.category);
  });

  return (
    <>
      <Csbf
        sendDataToParent={dataFromChild}
        setIconSize={setIconSize}
        setIconSize1={toggleIconSize}
      />

      <div className="w-full bg-gray-200">
        <div className="container mx-auto h-full flex">
          <div className="w-1/6 p-2 mt-8 ">
            <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wide mt-12 p-2">
              Style
            </h2>
            <ul>
              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("solid")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("solid")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    style={{ pointerEvents: "none", visibility: "visible" }}
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                      fill="#616D8A"
                    />
                  </svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("solid")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Solid
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("solid")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  27
                </span>
              </li>
              <li
                className={`flex items-justify-center mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("regular")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("regular")}
              >
                <div className="flex items-center mx-4">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className=""
                  >
                    <path
                      d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                      fill="#616D8A"
                    />
                  </svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("regular")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Regular
                  </span>
                </div>
                <span
                  className={`text-gray-800 text-xs ml-auto ${
                    activeCategories.includes("regular")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  4
                </span>
              </li>
            </ul>

            {/* Featured */}
            <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wide mt-12 p-2">
              Featured
            </h2>
            <ul>
              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("New")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("New")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"  fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("New")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    New In V6
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("New")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  2
                </span>
              </li>

              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Sponsored")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Sponsored")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                    style={{ pointerEvents: "none", visibility: "visible" }}
                  >
                    <path
                      d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                      fill="#616D8A"
                    />
                  </svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Sponsored")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Sponsored
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Sponsored")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  7
                </span>
              </li>

              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Staff")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Staff")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                      fill="#616D8A"
                    />
                  </svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Staff")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Staff Favorites
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Staff")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  4
                </span>
              </li>
            </ul>

            {/* Categories */}

            <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wide mt-12 p-2">
              Categories
            </h2>

                  <ul>

                  <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("animals")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("animals")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("animals")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Animals
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("animals")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  10
                </span>
              </li>

              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Buildings")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Buildings")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Buildings")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Buildings
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Buildings")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  24
                </span>
              </li>



              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Business")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Business")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Business")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Business
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Business")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  40
                </span>
              </li>



              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Camping")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Camping")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Camping")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Camping
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Camping")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  14
                </span>
              </li>




              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Energy")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Energy")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z "  fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Energy")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Energy
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Energy")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  8
                </span>
              </li>


              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Emoji")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Emoji")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zm-216-161.7l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 157.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z" fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Emoji")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Emoji
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Emoji")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  15
                </span>
              </li>


              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Socials")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Socials")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Socials")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Socials
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Socials")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  22
                </span>
              </li>


              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Music")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Music")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Music")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Music
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Music")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  19
                </span>
              </li>


              <li
                className={`flex items-center justify-between mb-2 cursor-pointer rounded p-2 hover:border hover:border-gray-400 hover:rounded-lg ${
                  activeCategories.includes("Text")
                    ? "text-white bg-blue-400"
                    : ""
                }`}
                onClick={() => handleCategoryFilter("Text")}
              >
                <label className="flex items-center mx-4 custom-label">
                  <input
                    type="radio"
                    className="form-radio custom-radio h-6 w-6 square-radio absolute opacity-0 hover:opacity-100 hover:visible transition-opacity duration-300"
                    name="category"
                  />
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0-32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0-32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" fill="#616D8A"/></svg>
                  <span
                    className={`ml-2 text-gray-800 text-xs ${
                      activeCategories.includes("Text")
                        ? "text-white bg-blue-400"
                        : ""
                    }`}
                  >
                    Text
                  </span>
                </label>
                <span
                  className={`text-gray-800 text-xs ${
                    activeCategories.includes("Text")
                      ? "text-white bg-blue-400"
                      : ""
                  }`}
                >
                  14
                </span>
              </li>




                  </ul>











          </div>
          <div className="w-3/4 p-4 mt-12">
            <div className="flex flex-wrap mt-2">
              {selectedIcons.map((icon, index) => (
                <div key={index} className="p-4">
                  <div className="text-center">
                    <div
                      className="rounded-lg p-7 flex flex-col items-center justify-center transition-all duration-300 ease-in-out cursor-pointer bg-white hover:bg-yellow-400"
                      style={{ width: iconSize1, height: iconSize1 }}
                    >
                      {React.cloneElement(icon.svg, iconSize)}
                      <div className="text-center mt-2 text-xs">
                        {icon.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
