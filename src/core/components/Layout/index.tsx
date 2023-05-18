import { JSX, lazy } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

// const Home = lazy(() => import('../../../pages/home'))

import { Home } from "../../../pages/home";

export const Layout = () => {
    return <Router>
        <Navbar />
        <main class="container mx-auto min-h-full p-2 md:p-0">
            <Routes>
                <Route path={'/'} component={Home} />
            </Routes>
        </main>
        <div class="relative mt-auto">
            <Footer />
        </div>
    </Router>
}