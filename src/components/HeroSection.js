import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from "../videos/video-2.mp4";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video className='hero-video' src={Video} autoPlay loop muted />

            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div class="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='fa fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
