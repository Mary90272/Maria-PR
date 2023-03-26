import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <section id="about" className="container">

                <section className="grid-box">
                    <section className="item1">
                        <p>My Portfolio</p>
                    </section>
                    <section className="item2">
                        <p>Hello, It's my portfolio.Visit Links above to see my work and contact me.Thanks ❤️ </p>
                    </section>
                </section>

            </section>
            <Footer />
        </>
    )
}

export default Home