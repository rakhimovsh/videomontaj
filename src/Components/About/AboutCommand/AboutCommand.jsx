import React from 'react';
import './AboutCommand.scss'
import MemberImg from '../../../Assets/Images/member.png'
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const AboutCommand = () => {

    
    return (
        <section className="about-command site-container">
            <div className="about-command__inner">
                <h2>
                    О нашей команде
                </h2>

                <h3>
                    Оглянитесь на наших участников
                </h3>

                <p>
                    Наша команда увлечена и энергична. Мы развиваем творческий потенциал, учимся все больше и больше, чтобы совершенствовать свои навыки каждый день. Присоединяйтесь к нам!!!
                </p>
            </div>
            
            <Splide  options={{
                    perPage: 3
            }} aria-label="My Favorite Images">
                <SplideSlide className="d-flex">
                <ul className="list-unstyled member-list p-0 d-flex gap-4 mx-auto">
                    <li className='member-list__item w-25 d-flex flex-column'>
                        <img src={MemberImg} alt="memberImg" width={325} height={325} />
                        <h4 className=" mx-auto">Sherzod Yoqubjonov</h4>
                        <p className="mx-auto">UX/UI Designer</p>
                        <ul className='list-unstyled d-flex icon-list justify-content-between w-50 mx-auto'>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-telegram'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-facebook'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-instagram'></i></a></li>
                        </ul>
                    </li>
                </ul>
                </SplideSlide>
                <SplideSlide className="d-flex">
                <ul className="list-unstyled member-list p-0 d-flex gap-4 mx-auto">
                    <li className='member-list__item w-25 d-flex flex-column'>
                        <img src={MemberImg} alt="memberImg" width={325} height={325} />
                        <h4 className=" mx-auto">Sherzod Yoqubjonov</h4>
                        <p className="mx-auto">UX/UI Designer</p>
                        <ul className='list-unstyled d-flex icon-list justify-content-between w-50 mx-auto'>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-telegram'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-facebook'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-instagram'></i></a></li>
                        </ul>
                    </li>
                </ul>
                </SplideSlide>
                <SplideSlide className="d-flex">
                <ul className="list-unstyled member-list p-0 d-flex gap-4 mx-auto">
                    <li className='member-list__item w-25 d-flex flex-column'>
                        <img src={MemberImg} alt="memberImg" width={325} height={325} />
                        <h4 className=" mx-auto">Sherzod Yoqubjonov</h4>
                        <p className="mx-auto">UX/UI Designer</p>
                        <ul className='list-unstyled d-flex icon-list justify-content-between w-50 mx-auto'>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-telegram'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-facebook'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-instagram'></i></a></li>
                        </ul>
                    </li>
                </ul>
                </SplideSlide>
                <SplideSlide className="d-flex">
                <ul className="list-unstyled member-list p-0 d-flex gap-4 mx-auto">
                    <li className='member-list__item w-25 d-flex flex-column'>
                        <img src={MemberImg} alt="memberImg" width={325} height={325} />
                        <h4 className=" mx-auto">Sherzod Yoqubjonov</h4>
                        <p className="mx-auto">UX/UI Designer</p>
                        <ul className='list-unstyled d-flex icon-list justify-content-between w-50 mx-auto'>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-telegram'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-facebook'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-instagram'></i></a></li>
                        </ul>
                    </li>
                </ul>
                </SplideSlide>
                <SplideSlide className="d-flex">
                <ul className="list-unstyled member-list p-0 d-flex gap-4 mx-auto">
                    <li className='member-list__item w-25 d-flex flex-column'>
                        <img src={MemberImg} alt="memberImg" width={325} height={325} />
                        <h4 className=" mx-auto">Sherzod Yoqubjonov</h4>
                        <p className="mx-auto">UX/UI Designer</p>
                        <ul className='list-unstyled d-flex icon-list justify-content-between w-50 mx-auto'>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-telegram'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-facebook'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-instagram'></i></a></li>
                        </ul>
                    </li>
                </ul>
                </SplideSlide>
                <SplideSlide className="d-flex">
                <ul className="list-unstyled member-list p-0 d-flex gap-4 mx-auto">
                    <li className='member-list__item w-25 d-flex flex-column'>
                        <img src={MemberImg} alt="memberImg" width={325} height={325} />
                        <h4 className=" mx-auto">Sherzod Yoqubjonov</h4>
                        <p className="mx-auto">UX/UI Designer</p>
                        <ul className='list-unstyled d-flex icon-list justify-content-between w-50 mx-auto'>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-telegram'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-facebook'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-instagram'></i></a></li>
                        </ul>
                    </li>
                </ul>
                </SplideSlide>
                <SplideSlide className="d-flex">
                <ul className="list-unstyled member-list p-0 d-flex gap-4 mx-auto">
                    <li className='member-list__item w-25 d-flex flex-column'>
                        <img src={MemberImg} alt="memberImg" width={325} height={325} />
                        <h4 className=" mx-auto">Sherzod Yoqubjonov</h4>
                        <p className="mx-auto">UX/UI Designer</p>
                        <ul className='list-unstyled d-flex icon-list justify-content-between w-50 mx-auto'>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-telegram'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-facebook'></i></a></li>
                            <li><a className='text-decoration-none' href="#"><i className='icons icon-instagram'></i></a></li>
                        </ul>
                    </li>
                </ul>
                </SplideSlide>
              
            </Splide>
        </section>
    );
}

export default AboutCommand;
