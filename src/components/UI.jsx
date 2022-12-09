import { Outlet } from "react-router-dom";
import { useMotionContext, useModeContext, useUpdateContext } from '../hooks/useCreateWebContext'
import modeSwitcher from "../functions/modeSwitcher";
//components
import LineNumbers from "./LineNumbers";
import Header from "./Header";
import Footer from "./Footer";

export default function UI() {
  const mode = useModeContext()
  modeSwitcher(mode)
  return (
    <main className="h-full grid grid-cols-[30px_1fr_30px] grid-rows-[30px_1fr_30px] bg-light dark:bg-dark overflow-y-auto overflow-x-hidden p-page-sm md:p-page-md lg:p-page-lg">
      <div className="col-span-3">
        <Header />
      </div>
      <LineNumbers/>
      <section className='w-full h-full'>
        <Outlet context={[useMotionContext, useModeContext, useUpdateContext ]} />
      </section>
      <div className="flex flex-col justify-start items-center py-sm">
        <span className="relative top-[20px] w-max font-console text-console text-decor-light dark:text-decor-dark rotate-side origin-top-center">--open</span>
        <span className="relative w-max font-console text-console text-decor-light dark:text-decor-dark rotate-side my-auto">all rights reserved</span>
      </div>
      <div className="col-span-3">
        <Footer />
      </div>
    </main>
  );
}
