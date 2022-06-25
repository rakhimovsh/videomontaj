import React from 'react';
import './Mission.scss'
import MissionImg from '../MissionImg/MissionImg';

const Misson = () => {
    return (
        <section className="site-container d-flex align-items-center">
            <div className="mission__left">
                <h2>
                    Видение и миссия
                </h2>
                <div className="mission__left-inner">
                    <h4>
                        Мы хотим отправить сообщение
                    </h4>
                    <p>
                        “Istory - Ваши устойчивые ценности” как подтверждение того, что нас всегда сопровождают     клиенты и сообщества.
                    </p>
                </div>
                <p>
                    “Istory - хочет стать комплексной компанией по разработке программного обеспечения, а также клиентами. Нашими усилиями по популяризации цифровых технологий в жизнь мы надеемся укрепить позиции узбекских предприятий на международном рынке.
                </p>
            </div>
            <MissionImg/>
        </section>
    );
}

export default Misson;
