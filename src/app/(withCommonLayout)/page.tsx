import React from "react";
import Questions from "../components/questions/Questions";
import GetInTouch from "../components/getInTouch/GetInTouch";

const page = () => {
  return (
    <div className="xs:space-y-12 md:space-y-32 lg:space-y-52">
      <div>
        <Questions />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
};

export default page;
