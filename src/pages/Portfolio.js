import React from 'react'
import box1 from '../assets/img/box 1.jpg'
import box2 from '../assets/img/box2.jpg'
import header from '../assets/img/header.jpg'
import lastone from '../assets/img/lastone.jpeg'
import quizgame from '../assets/img/quizgame.png'
import texteditor from '../assets/img/texteditor.png'
import userpass from '../assets/img/userpass.png'
import weather from '../assets/img/weather.png'
import work from '../assets/img/WORK.png'
import portfolio from '../assets/img/portfolio.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Portfolio = () => {
    return (
        <>
            <Header />
            {/* <!--Section work with 5 grid box --> */}
            <section className="container">
                {/* <!--grid section--> */}
                <section className="grid-box">
                    {/* <!--work section--> */}
                    <section id="work" className="item1">
                        <p>Work</p>
                    </section>
                    {/* <!--section for 5--> */}
                    <section className="item2">
                        <section className="grid-container">
                            {/* <!-- 1 --> */}
                            <section className="sub-item1 sub-container">
                                <section className="work-box">
                                    <section className="blue-overlay"></section>
                                    <img className="image" src={quizgame} />
                                </section>
                                <section className="work-box-text">
                                    <h1>Quiz Game</h1>
                                    <p>JavaScRript</p>
                                    <div className='work_btn_Container'>
                                    <a target='_blank' href='https://github.com/Mary90272/quiz-game-JS-' className='btn_work'>View Code</a>
                                    <a target='_blank' href='https://mary90272.github.io/quiz-game-JS-/' className='btn_work'>View App</a>
                                </div>
                                </section>
                                
                            </section>
                            {/* <!-- 2 --> */}
                            <section className="sub-item2 sub-container">
                                <section className="work-box1">
                                    <section className="blue-overlay"></section>
                                    <img className="image" src={texteditor} />
                                </section>
                                <section className="work-box-text">
                                    <h1>Text Editor</h1>
                                    <p>HTML CSS NODE Webpack</p>
                                    <div className='work_btn_Container'>
                                    <a target='_blank' href='https://github.com/Mary90272/Text-Editor' className='btn_work'>View Code</a>
                                    <a target='_blank' href='https://textenitor.herokuapp.com/' className='btn_work'>View App</a>
                                </div>
                                </section>
                             </section>  
                            {/* <!-- 3 --> */}
                            <section className="sub-item3 sub-container">
                                <section className="work-box1">
                                    <section className="blue-overlay"></section>
                                    <img className="image" src={userpass} />
                                </section>
                                <section className="work-box-text">
                                    <h1>User Password</h1>
                                    <p>HTML/JavaScript/CSS</p>
                                    <section className='work_btn_Container'>
                                    <a target='_blank' href='https://github.com/Mary90272/user-password' className='btn_work'>View Code</a>
                                    <a target='_blank' href='https://mary90272.github.io/user-password/' className='btn_work'>View App</a>
                                </section>
                                </section>
                                
                            </section>
                            {/* <!-- 4 --> */}
                            <section className="sub-item4 sub-container">
                                <section className="work-box1">
                                    <section className="blue-overlay"></section>
                                    <img className="image" src={weather} />
                                </section>
                                <section className="work-box-text">
                                    <h1>Weather Dashbard</h1>
                                    <p>JS/API/HTML/CSS</p>
                                    <div className='work_btn_Container'>
                                    <a target='_blank' href='https://github.com/Mary90272/weather-dashboard' className='btn_work'>View Code</a>
                                    <a target='_blank' href='https://mary90272.github.io/weather-dashboard/' className='btn_work'>View App</a>
                                </div>
                                </section>
                               
                            </section>
                            {/* <!-- 5 --> */}

                            <section className="sub-item5 sub-container">
                                <section className="work-box1">
                                    <section className="blue-overlay"></section>
                                    <img className="image" src={work} />
                                </section>
                                <section className="work-box-text">
                                    <h1>Work Scheduler</h1>
                                    <p>HTML/CSS/JS/NODE</p>
                                    <div className='work_btn_Container'>
                                    <a target='_blank' href='https://github.com/Mary90272/Work-Scheduler' className='btn_work'>View Code</a>
                                    <a target='_blank' href='https://mary90272.github.io/Work-Scheduler/' className='btn_work'>View App</a>
                                </div>
                                </section>
                              

                            </section>
                            <section className="sub-item1 sub-container">
                                <section className="work-box">
                                    <section className="blue-overlay"></section>
                                    <img className="image" src={portfolio} />
                                </section>
                                <section className="work-box-text">
                                    <h1>Personal Potfolio</h1>
                                    <p>ReactJs</p>
                                    <div className='work_btn_Container'>
                                    <a target='_blank' href='https://github.com/Mary90272/personal-portfolio' className='btn_work'>View Code</a>
                                    <a target='_blank' href='https://mary90272.github.io/personal-portfolio/' className='btn_work'>View App</a>
                                </div>
                                </section>
                              
                            </section>
                        </section>
                    </section>
                </section>

            </section>
            <Footer /></>
    )
}

export default Portfolio