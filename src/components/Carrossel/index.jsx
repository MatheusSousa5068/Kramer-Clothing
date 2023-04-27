import React from 'react'
import Slider from 'react-slick'

import casual from '../../assets/casual.svg'
import workaholic from '../../assets/workaholic.svg'
import party from '../../assets/party.svg'
import custom from '../../assets/custom.svg'

import './style.css'

export default function Carrossel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div id="carrosel-container">
            <h2 id='Kits'>KITS</h2>
            <Slider {...settings}>
                <div className='items-carrossel'>
                    <img src={workaholic} alt="" />

                    <h3>Workaholic</h3>
                    <ul className='text-carrossel'>
                    <li>Items designed for a professional enviroment</li>
                    <li>Bring up a serious and elegant aspect</li>
                    </ul>
                </div>

                <div className='items-carrossel'>
                    <img id="casual-img" src={casual} alt="" />

                    <h3>Casual</h3>
                    <ul className='text-carrossel'>
                    <li>Clothes you can use in your daily routine</li>
                    <li>Various and versatile options</li>
                    </ul>
                </div>

                <div className='items-carrossel'>
                    <img src={party} alt="" />

                    <h3>Party</h3>
                    <ul className='text-carrossel'>
                    <li>Tailored outfits for your nights out</li>
                    <li>Kit made for formal occasions</li>
                    </ul>
                </div>

                <div className='items-carrossel'>
                    <img src={custom} alt="" />

                    <h3>Custom</h3>
                    <ul className='text-carrossel'>
                    <li>Personalized kit according to your preferences</li>
                    <li>Combine whatever items you want</li>
                    </ul>
                </div>
            </Slider>
        </div>
    )
}
