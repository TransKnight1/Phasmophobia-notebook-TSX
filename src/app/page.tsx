import React from "react";
import GhostComponent from "./ghost-component";
import GhostCheckBoxes from "./ghost-checkboxes";

function Home() {
  return (
    <div className="bg-gray-500 min-h-screenjustify-center items-center">

      <div className="grid grid-cols-3 gap-4">
        <GhostCheckBoxes />
      </div>

      <div className="mt-2 grid grid-cols-3 gap-4">
        <GhostComponent />
      </div>

    </div>
  );
}

export default Home;