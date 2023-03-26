import React from 'react'

import lastone from '../assets/img/lastone.jpeg'
import Aboutme from './Aboutme'
const Main = () => {
    return (
        <>
            <main>
                {/* <!-- images section --> */}
                <section className="home">

                    <section className="home-text-box">
                        <img alt='Image' className="my-images" src={lastone} />
                        <p>Software Developer </p>
                    </section>

                </section>

                {/* <!-- Section  About me --> */}


                {/* <!--Section work with 5 grid box --> */}

            </main>
        </>
    )
}

export default Main