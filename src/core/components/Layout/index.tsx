import { JSX, lazy } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import {Home} from '../../../pages/Home'
import { Playground } from "../../../pages/Playground";

export const Layout = () => {
    return <Router>
        <Navbar />
        <main class="container mx-auto min-h-full p-2 md:p-0">
            <Routes>
                <Route path={'/'} component={Home} />
                <Route path={'/playground'} component={Playground} />
            </Routes>
        </main>
        <div class="relative mt-auto">
            <Footer />
        </div>
    </Router>
}