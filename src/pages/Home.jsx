import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <>
            <Navbar />
            <main className="d-flex justify-content-center align-items-center vh-100">
                <h1>Home</h1>
            </main>
            <Footer />
        </>
    )
}
