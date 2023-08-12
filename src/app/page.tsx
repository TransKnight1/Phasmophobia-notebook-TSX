import React from "react";
import GhostComponent from "./ghost-component";
import GhostCheckBoxes from "./ghost-checkboxes";

function Home() {
  return (
    <main className="min-h-screenjustify-center items-center">
      
      <div className="h-4/5 w-4/5">
      <div className="p-2">
        <GhostCheckBoxes />
      </div>

      <div className="p-2 grid grid-cols-3">
        <GhostComponent />
      </div>
      </div>


    </main>
  );
}

export default Home;