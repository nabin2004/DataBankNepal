import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import APIs from "../pages/api";
import Download from "../pages/download";
import Insights from "../pages/insights";
import About from "../pages/about";
import Errored from "../pages/Errored";
import DataInfo from "../pages/dataInfo";
import DataCard from "./DataCard";
import Code from '../components/code';
import Contact from "./contact";

const LeftPanel = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex font-inter shadow-md">
          <div className="bg-fixed flex-col justify-start gap-1 border-r border-gray-300 mt-2 text-xs ml-2 hidden sm:flex">
            <nav className="">
              <ul>
                <li>
                  <p className="text-[9px] text-slate-400">ESSENTIALS</p>
                  <Link to="/">
                    <div className=" border-b ">
                      <button className="flex gap-2 hover:bg-[#A41034] p-4 rounded-lg w-full hover:text-white">
                        <div className="material-symbols-outlined mr-2">home</div>
                        Home
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <p className="text-[9px] text-slate-400">DATA PANEL</p>
                  <Link to="/insights">
                    <div className="">
                      <button className="flex gap-2 hover:bg-[#A41034] p-4 rounded-lg w-full hover:text-white">
                        <div className="material-symbols-outlined mr-2">
                          Insights
                        </div>
                        Insights
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/download">
                    <div className="">
                      <button className="flex gap-2 hover:bg-[#A41034] p-4 rounded-lg w-full hover:text-white">
                        <div className="material-symbols-outlined mr-2">
                          download_for_offline
                        </div>
                        Download
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/api">
                    <div className="border-b">
                      <button className="flex gap-2 hover:bg-[#A41034] p-4 rounded-lg w-full hover:text-white">
                        <div className="material-symbols-outlined flex mr-2">
                          api
                        </div>
                        API
                      </button>
                    </div>
                  </Link>
                </li>
                <li>
                  <p className="text-[9px] text-slate-400">REPORT AND CONTACT</p>
                  <Link to="/contact">
                    <div className="">
                      <button className="flex gap-2 mt-2 hover:bg-[#A41034] p-4 rounded-lg w-full hover:text-white">
                        <div className="material-symbols-outlined flex mr-2">
                          report
                        </div>
                        Contact
                      </button>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div className="border-b">
                      <button className="flex gap-2 mt-2 hover:bg-[#A41034] p-4 rounded-lg w-full hover:text-white">
                        <div className="material-symbols-outlined flex mr-2">
                          info
                        </div>
                        About
                      </button>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-[100%]">
            <div
              id="box2render"
              className="flex flex-col h-screen w-full gap-2"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/api" element={<APIs />} />
                <Route path="/download" element={<Download />} />
                <Route path="/about" element={<About />} />
                <Route path="/insights/" element={<Insights />} />
                <Route path="/contact/" element={<Contact />} />
                <Route path="/insights/datacard" element={<DataInfo />}>
                  <Route path="" element={<DataCard />} />
                  <Route path="code" element={<Code />} />
                </Route>
                <Route path="/datainfo" element={<DataInfo />} />
                <Route path="*" element={<Errored />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default LeftPanel;
