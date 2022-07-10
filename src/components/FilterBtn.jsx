import React from "react";
import { GiNoodles, GiChickenOven } from "react-icons/gi";
import { IoFishSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function FilterBtn() {
  return (
    <div className="w-full mt-0 mb-8 lg:my-8">
      <div className="flex flex-row justify-around items-center w-1/2 md:w-1/4 lg:w-1/5 mx-auto">
        <Link to={"/cuisine/thai"}>
          <div className="text-center">
            <div className="mx-auto w-10 h-10 bg-neutral-700 text-white grid place-items-center rounded-md mb-2">
              <IoFishSharp className="text-xl" />
            </div>
            <span className="text-sm font-medium">Thai</span>
          </div>
        </Link>
        <Link to={"/cuisine/italian"}>
          <div className="text-center">
            <div className="mx-auto w-10 h-10 bg-neutral-700 text-white grid place-items-center rounded-md mb-2">
              <GiNoodles className="text-xl" />
            </div>
            <span className="text-sm font-medium">Italian</span>
          </div>
        </Link>
        <Link to={"/cuisine/korean"}>
          <div className="text-center">
            <div className="mx-auto w-10 h-10 bg-neutral-700 text-white grid place-items-center rounded-md mb-2">
              <GiChickenOven className="text-xl" />
            </div>
            <span className="text-sm font-medium">Korean</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FilterBtn;
