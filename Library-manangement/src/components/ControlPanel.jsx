import React, { useEffect } from "react";
import Sidebar from "./Sidebar";

function ControlPanel() {
  useEffect(()=>{
    <Sidebar/>
  },[]);
  return (
    <>
      <div className="absolute top-16 left-80">
        <h5 className="text-2xl"> Control Panel</h5>
        <br />
      <div class="flex flex-wrap justify-start gap-8  ">
        <div class="w-56 h-36 p-4  bg-[#00A65A] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-100">0</h5>
          <p class="font-normal text-gray-100">Distinct books in library</p>
        </div>

        <div class="w-56 h-36 p-4 bg-[#00C0EF] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-100">0</h5>
          <p class="font-normal text-gray-100">Distinct books in library</p>
        </div>

        <div class="w-56 h-36 p-4 bg-[#D150E8] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-100">0</h5>
          <p class="font-normal text-gray-100">Total count of books</p>
        </div>

        <div class="w-56 h-36 p-4 bg-[#DE4B39] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-100">0</h5>
          <p class="font-normal text-gray-100">Books not returned</p>
        </div>

        <div class="w-56 h-36 p-4 bg-[#F39C11] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-100">0</h5>
          <p class="font-normal text-gray-100">Total count of books</p>
        </div>

        <div class="w-56 h-36 p-4 bg-[#0073B6] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-100">0</h5>
          <p class="font-normal text-gray-100">Books not returned</p>
        </div>

        <div class="w-56 h-36 p-4 bg-[#6dde39] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-100">0</h5>
          <p class="font-normal text-gray-100">Total count of books</p>
        </div>

        <div class="w-56 h-36 p-4 bg-[#FFC30F] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-100">0</h5>
          <p class="font-normal text-gray-100">Books not returned</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default ControlPanel;
