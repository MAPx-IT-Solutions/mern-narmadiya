import React from 'react'
// import {Link} from 'react-router-dom'
import Marquee from "react-fast-marquee"
import HomeCss from '../Styles/Home.module.css'
import Slide1 from '../img/Slider1.jpg'
import Slide2 from '../img/Slider2.jpg'
import Slide3 from '../img/Slider3.jpg'
import { Navbars } from '../components/Navbar';
import {Header} from '../components/header'

export const Home = () => {
    return(
        <>
        <Header/>
        <Navbars/>
            <Marquee gradient={false} direction="left" className={HomeCss.MarqueeTag}>
                "अखिल भारतीय नार्मदीय ब्राह्मण समाज आपका हार्दिक स्वागत अभिनन्दन करता हैं !! "
            </Marquee>
            <div className={`${HomeCss.mainSection} section`}>
                <div className='row'>
                    <div className='col-md-4'>
                        {/* news start */}
                        <div className={`${HomeCss.newsBox}`}>
                            <div className={`${HomeCss.newsField}`}>
                                <h2 className={`${HomeCss.newsBoxHeading}`}>नार्म‍दीय ब्राह्मण समाज मुख्य समाचार</h2>
                            </div>
                            <div className={`${HomeCss.patricaField}`}>
                                <h2 className={`${HomeCss.newsBoxHeading}`}>नार्म‍दीय ब्राह्मण समाज प्रतिभा</h2>
                            </div>
                        </div>
                        {/* news end */}
                    </div>
                    <div className='col-md-8'>
                        {/* slider start */}
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner" style={{borderRadius:'5px'}}>
                            <div className={`${HomeCss.SlideWrapper} carousel-item active`}>
                                <img src={Slide1} className={`${HomeCss.slideImage} d-block w-100`} alt="slide1"/>
                            </div>
                            <div className={`${HomeCss.SlideWrapper} carousel-item`}>
                                <img src={Slide2} className={`${HomeCss.slideImage} d-block w-100`} alt="slide2"/>
                            </div>
                            <div className={`${HomeCss.SlideWrapper} carousel-item`}>
                                <img src={Slide3} className={`${HomeCss.slideImage} d-block w-100`} alt="slide3"/>
                            </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        {/* slidr end */}
                        {/* information start */}
                        <div className={`${HomeCss.information}`}>
                            <p>"narmadiyabrahmins.com" वेबसाइट नार्मदीय ब्राह्मण समाज को आपस मे जोड़ने के रुप मे स्वयं का मंच प्रदान करने वाला एक मात्र विश्वसनीय संगठन है जो समाज की एकता , समस्त संगठनों की योजक कड़ी तथा सभी रजिस्टर्ड संस्थाओं को बढावा देने को ध्यान मे रखकर स्वाभीमानी,संगठित,अनुशासित,व कर्मठ कार्यकर्ताओ के बल पर कार्यरत है ओर राष्ट्रीय द्रष्टीकोण के साथ शिक्षा के विकास , समाज सुधार व विकास के नए आयाम की सोच रखने वाले विद्वानों द्वारा बताए मार्ग पर चलते हुए सम्पूर्ण नार्मदीय ब्राह्मण समाज को आपस मे जोड़ना ही हमारा मुख्य उद्देश्य है। हमारी टीम पूर्ण लोकतांत्रिक पद्धति से कार्यरत रहते हुए आपने लक्ष्य की ओर अग्रसर है।<br /><br />
                            <b>निवेदन :</b><br /><br />
                            आप सभी समाजजनो से निवेदन है कि आप अपने-अपने सुझाव भेजकर इस वेब साईट को मजबूत बनायें ताकि आपसी सम्पर्क मे उपयोंग ले सके। आप सभी से निवेदन है। कि आप अपने-अपने क्षेत्र की संस्थाओ की पूरी जानकारी ritikatre27@gmail.com , himanshuatre088@gmail.com Whats app : 7089986702 | 7694969509 को भेजें, हमे पूरी आशा है कि आप सभी लोग समाज को अन्तर्राष्ट्रीय स्तर पर जोड़ने मे हमारी सहायता करेगे।
                            </p>
                        </div>
                        {/* information end */}
                    </div>
                </div>
            </div>
            
        </>
    )
}