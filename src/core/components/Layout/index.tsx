import { Component, JSX } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import { Navbar } from "../Navbar"
import { Footer } from "../Footer"

const App = () => {
    return 'app';
}

export const Layout = () => {
    return <Router>
        <Navbar />
        <main class="container mx-auto min-h-full">
            <Routes>

                <Route path={'/'} component={App}>

                </Route>
            </Routes>
        </main>
        <div class="relative mt-auto">
            <Footer />
        </div>
    </Router>
}