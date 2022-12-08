import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useMotionContext, useModeContext, useUpdateContext } from '../hooks/useCreateWebContext'
//components
import LineNumbers from "./LineNumbers";
import Header from "./Header";
import Footer from "./Footer";

export default function UI() {

  return (
    <main className="min-h-full md:h-full bg-light dark:bg-dark overflow-hidden p-page-sm md:p-page-md lg:p-page-lg">
      <Header />
      <div id='numbersContainer' className="overflow-hidden py-3">
        <LineNumbers/>
      </div>
      <div className="w-full h-full">
        <Outlet context={[useMotionContext, useModeContext, useUpdateContext ]} />
      </div>
      <div className="flex flex-col justify-start items-center py-sm">
        <span className="relative top-[20px] w-max font-console text-console text-decor-light dark:text-decor-dark rotate-side origin-top-center">--open</span>
        <span className="relative w-max font-console text-console text-decor-light dark:text-decor-dark rotate-side my-auto">all rights reserved</span>
      </div>
      <Footer />
    </main>
  );
}
