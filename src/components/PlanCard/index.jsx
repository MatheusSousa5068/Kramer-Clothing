import React from 'react';

import './style.css'

function PlanCard(props) {
    return (
        <div id='planCards-container'>
            <h2 id='Plans'>PLANS</h2>
            <div className='Cards'>
                <ul>
                    <li className='Card' id='seven-days'>
                        <ul className='days'>
                            <li className='n_days'>7</li>
                            <li className='t_days'>days</li>
                        </ul>
                        <ul className='prices'>
                            <li className='starts_at'>Starts at</li>
                            <li className='price'>$ 25</li>
                        </ul>
                    </li>
                    <li className='Card' id='fifteen-days'>
                        <ul className='days'>
                            <li className='n_days'>15</li>
                            <li className='t_days'>days</li>
                        </ul>
                        <ul className='prices'>
                            <li className='starts_at'>Starts at</li>
                            <li className='price'>$ 50</li>
                        </ul>
                    </li>
                    <li className='Card' id='thirty-days'>
                        <ul className='days'>
                            <li className='n_days'>30</li>
                            <li className='t_days'>days</li>
                        </ul>
                        <ul className='prices'>
                            <li className='starts_at'>Starts at</li>
                            <li className='price'>$ 100</li>
                        </ul>
                    </li>

                </ul>

            </div>
            
        </div>
    );
}

export default PlanCard;