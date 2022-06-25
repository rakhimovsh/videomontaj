import React from 'react';
import './Partners.scss'
import PartnerImg from '../../../Assets/Images/partner.png'

const Partners = () => {
    return (
        <section className='partners-section'>
            <div className='partners site-container d-flex justify-content-between align-items-center'>
                <h2>Партнёры:</h2>
                <ul className="d-flex list-unstyled justify-content-between">
                    <li>
                        <img src={PartnerImg} alt="partners" />
                        
                    </li>
                    <li>
                        <img src={PartnerImg} alt="partners" />
                        
                    </li>
                    <li>
                        <img src={PartnerImg} alt="partners" />
                        
                    </li>
                    <li>
                        <img src={PartnerImg} alt="partners" />
                        
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Partners;
