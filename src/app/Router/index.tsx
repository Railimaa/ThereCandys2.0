import { lazyLoad } from "@app/utils/lazyLoad";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const { Home } = lazyLoad(() => import('@ui/pages/Home'))
const { Signin } = lazyLoad(() => import('@ui/pages/Signin'))
const { Signup } = lazyLoad(() => import('@ui/pages/Signup'))

export function Router() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div className="w-[40px] h-[40px] rounded-full border-4 border-r-slate-700 animate-spin" />}>
     
      <Routes>
        <Route path={routes.home} element={<Home />}/>
        <Route path={routes.signin} element={<Signin />}/>
        <Route path={routes.signup} element={<Signup />}/>
      </Routes>

    </Suspense>
    </BrowserRouter>
  )
}