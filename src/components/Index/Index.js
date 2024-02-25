import React from 'react';
import './Index.css';
import indexBackground from '../../images/index-background.png';
import containerBackground from '../../images/container-4-background.png';



function Index() {
    return (
        <div className="body">
            <div className="container">
                <div className="navbar">
                    <header>
                        <h2 className="logo"><span className="equi">Equi</span><span className="vista">Vista</span></h2>
                        <nav>
                            <a href="./pages/solutions/solution.html">Solution</a>
                            <a href="./pages/profile.html">Profile</a>
                            <a href="./pages/login.html">Login</a>
                            <a href="./pages/support.html">Support</a>
                            <a href="#">More</a>
                            <button id="button"><span><a href="./pages/get-started.html">Get Started</a></span></button>
                        </nav>
                    </header>
                </div>
            </div>
            <div className="container-2">
                <div className="main-portion">
                    <h1>The New Standard in <span>Stock Tracking</span></h1>
                    <p>Use Data to Get a 360-Degree View of Your Portfolio</p>
                    <button className="learn-more"><a href="./pages/solution.html">Learn More</a></button>
                </div>
            </div>
            <div className="container-3">  
                <div className="container-3-paragraphs">
                    <h1>Let Your Data Take Your Portfolio your Higher Grounds</h1>
                    <p>Unlock the potential of your portfolio with the power of data. 
                        Our cutting-edge solutions and analytics will elevate your investments to new heights. 
                        Let data be your guiding force as you reach for greater financial success. 
                        Explore our services and watch your portfolio soar to higher grounds</p>    
                </div>   
                <div className="divs">
                    <div className="Your-Success">
                        <p>
                            Discover how <span>we can propel your achievements</span> <span>and ambitions to new heights</span> 
                        </p>
                        <button><a href="#">Your Succes</a></button>
                    </div>
                    <div className="Our-Team">
                        <p>
                            Meet the dedicated <span>experts behind our mission, </span><span>committed to your prosperity</span>
                        </p>
                        <button><a href="#">Our Team</a></button>
                    </div>
                    <div className="Our-Solutions">
                        <p>
                            Explore our innovative <span>tools and strategies,</span> <span>designed to transform your future</span> 
                        </p>
                        <button><a href="#">Our Solutions</a></button>
                    </div>
                </div>
            </div>  
            <div className="container-4">
                <span><p>Are You Ready To Accelerate Your Business?</p></span>
                <div>
                    <p>
                        Prepare to propel your business forward. Embrace innovation, adapt to change, and ignite growth. It's time to accelerate and achieve remarkable success together.
                    </p>
                    <button className="learn-more"><span><a href="#">Learn More</a></span></button>
                </div>
            </div>
            <div className="contact">
                <div className="numbers">
                    <h2 className="logo"><span className="equi">Equi</span><span className="vista">Vista</span></h2>
                    <p>314-706-1388</p>
                    <p>elijah.fassler@gmail.com</p>
                    <p>St. Louis, MO 63017</p>
                </div>
                <div className="links">
                    <a href="./solutions/solution.html">Solution</a>
                    <a href="./pages/profile.html">Profile</a>
                    <a href="./pages/login.html">Login</a>
                    <a href="./pages/support.html">Support</a>
                    <button className="contact-button"><span><a href="./pages/get-started.html">Get Started</a></span></button>
                </div>
                <div className="socials">
                    <p>Follow Us On:</p>
                    <a href="#"><img src="#" /></a>
                    <a href="#"><img src="#" /></a>
                    <a href="#"><img src="#" /></a>
                </div>
            </div>
            <footer>
                <p>Copyright @ EquiVista 2023</p>
            </footer>
        </div>
    );
}

export default Index;
