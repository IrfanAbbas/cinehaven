import React from 'react'
import Footer from './Footer';
import FAQ from './FAQ';

export default function MainContent() {
  return (
    <>
    <div className='content-container '>
        <div className='maincontent'>
            <h1>Unlimited movies, TV shows, and more</h1>

            <p className='paragrph-content'>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <input type="email" name="email" id="email"  placeholder='Enter your Email here '/>
            <button className='get'>Get started</button>
        </div> 

    </div>
    <div className="TV-container">
            <div className='left-tv'>
                <h1>Enjoy on your TV</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className="right-tv">
                <img src="img/movibaner.jpeg" alt="this is img" />
            </div>
        </div>

        <div className="download">
            <div className="left-download">
                <img src="img/mobile-0819.jpg" alt="" />
            </div>
            <div className="right-download">
                <h1>Download your <br />shows  to watch<br /> offline.</h1>
                <p>Save your favorites easily and always have<br /> something to watch.</p>
            </div>
        </div>


        <div className="watch">
            <div className="left-watch">
                <h1>Watch <br />everywhere</h1>
                <p>Stream unlimited movies and TV<br /> shows on your phone, tablet, laptop,<br /> and TV</p>
            </div>
        </div>

        <div className="kids">
            <div className="left-kids">
                <img src="img/kids.png" alt="" />
            </div>
            <div className="right-kids">
                <h1>Create profiles for <br />kids</h1>
                <p>Send kids on adventures with their favorite<br /> characters in a space made just for them—free<br /> with your membership.</p>
            </div>
        </div>

        <FAQ />
        <Footer />
    </>
   
   
  )
}
