import React from 'react'
import abhiruchi from '../img/abhiruchi.jpg'
import ndlock from '../img/ndlok.jpg'
import jagat from '../img/jagat.jpg'
import patrikacss from '../Styles/patrika.module.css'
import { Header } from '../components/header'
import { Navbars } from '../components/Navbar'
export const Patrika = () => {
    return (
        <> 
        <Header/>
        <Navbars/>
            <section id="vantagens">
                <div className="container pt-5">
                    <div className= "row" >
                        <div className="col-md-12 ">
                            <h5 className="section-title h1">मुख्‍य समाचार</h5>
                            <a name="news" id="news">
                                <div id="news" >समाचार 1</div>
                            </a>
                            <div>
                                <p className={`${patrikacss.description} custom`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia officiis harum deleniti consequatur cumque. Quaerat voluptatem ipsa placeat earum? Eaque ex accusamus sequi rerum magnam, incidunt odit repudiandae iure.</p>
                            </div>
                            <a name="news" id="news">
                                <div id="news" >समाचार 2</div>
                            </a>
                            <div >
                                <p className={patrikacss.discription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia officiis harum deleniti consequatur cumque. Quaerat voluptatem ipsa placeat earum? Eaque ex accusamus sequi rerum magnam, incidunt odit repudiandae iure.</p>
                            </div>
                            <a name="news" id="news">
                                <div id="news" >समाचार 3</div>
                            </a>
                            <div >
                                <p className={patrikacss.discription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia officiis harum deleniti consequatur cumque. Quaerat voluptatem ipsa placeat earum? Eaque ex accusamus sequi rerum magnam, incidunt odit repudiandae iure.</p>
                            </div>
                            <a name="news" id="news">
                                <div id="news" >समाचार 4</div>
                            </a>
                            <div >
                                <p className={patrikacss.discription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia officiis harum deleniti consequatur cumque. Quaerat voluptatem ipsa placeat earum? Eaque ex accusamus sequi rerum magnam, incidunt odit repudiandae iure.</p>
                            </div>
                            <a name="news" id="news">
                                <div id="news" >समाचार 5</div>
                            </a>
                            <div >
                                <p className={patrikacss.discription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia officiis harum deleniti consequatur cumque. Quaerat voluptatem ipsa placeat earum? Eaque ex accusamus sequi rerum magnam, incidunt odit repudiandae iure.</p>
                            </div>
                    </div>
                    </div></div>
                    </section>


                    <section id="vantagens">
                        <div className="container pt-5">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h5 className="section-title h1">समाज पत्रिकाए</h5>
                                    <div className="row row-margin-bottom mt-5">
                                        <div className={`col-md-6 no-padding ${patrikacss.libItem} ${patrikacss.patrika}`} data-category="view">
                                            <div className={ patrikacss.libPanel}>
                                                <div className={`row box-shadow w-100 ${patrikacss.patrikabox}`}>
                                                    <div className="col-md-5 image-row">
                                                        <img src={abhiruchi} />
                                                    </div>
                                                    <div className="col-md-6 card-text">
                                                        <div className={`${patrikacss.libHeader} ${patrikacss.libRow} text-left pl-5`}>
                                                            <span className="blue">अभिरुचि - त्रेमासिक पत्रिका
                                                            </span>
                                                            <div className={patrikacss.libHeaderseperator}></div>
                                                        </div>
                                                        <div className={`${patrikacss.libRow} ${patrikacss.libDesc} pl-5`} >
                                                            अभि रुचि खरगोन से प्रकाशित एक त्रेमासिक पत्रिका हे , इसके प्रबंध सम्पादक श्री विनोद उपाध्याय हैं | <br/>
                                                            पता: A -102 आदर्श नगर खरगोन
                                                            MOB 9827231316
                                                        </div>
                                                        <a href="#" className="btn btn-block btn-social btn-facebook">
                                                            <i className="fa fa-facebook" ></i>  Facebook Page
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-md-6 no-padding ${patrikacss.libItem} ${patrikacss.patrika}`} data-category="view">
                                        <div className={ patrikacss.libPanel}>
                                        <div className={`row box-shadow w-100 ${patrikacss.patrikabox}`}>
                                                    <div className="col-md-5 image-row">
                                                        <img src={ndlock}/>

                                                    </div>
                                                    <div className="col-md-6 card-text">
                                                    <div className={`${patrikacss.libHeader}  ${patrikacss.libDesc} text-left pl-5`}>
                                                            <span className="blue">नार्मदीय लोक : एक मासिक पत्रिका                                          </span>
                                                            <div className={patrikacss.libHeaderseperator}></div>
                                                        </div>
                                                        <div className={`${patrikacss.libRow} ${patrikacss.libDesc} pl-5`} >
                                                            नार्मदीय लोक सेवा ट्रस्ट द्वारा प्रकाशित यह एक मासिक पत्रिका है |
                                                            <br />
                                                            सम्पादक : श्रीमती किरण साकल्ले <br />

                                                            पता : 160 , क्लर्क कॉलोनी , इंदौर |

                                                        </div>
                                                        <a className="btn btn-block btn-social btn-facebook">
                                                            <i className="fa fa-facebook" ></i>  Facebook Page
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-md-6 no-padding ${patrikacss.libItem} ${patrikacss.patrika}`} data-category="view">
                                        <div className={ patrikacss.libPanel}>
                                            <div className={`row box-shadow w-100 ${patrikacss.patrikabox}`}>
                                                    <div className="col-md-5 image-row">
                                                        <img src={jagat} />
                                                    </div>
                                                    <div className="col-md-6 card-text">
                                                    <div className={`${patrikacss.libHeader}  ${patrikacss.libDesc} text-left pl-5`}>
                                                            <span className="blue">नार्मदीय जगत : एक मासिक पत्रिका
                                                            </span>
                                                            <div className={patrikacss.libHeaderseperator}></div>
                                                        </div>
                                                        <div className={`${patrikacss.libDesc}  ${patrikacss.libDesc} pl-5 `}>
                                                            नार्मदीय जगत नार्मदीय ब्राह्मण समाज की एक स्थापित और विश्वसनीय सामाजिक पत्रिका है , यह  एक मासिक पत्रिका है |
                                                            <br/>
                                                            पता: डी 65, शॉपिंग काम्प्लेक्स,ए बी रोड़
                                                            इंदौर

                                                        </div>
                                                        <a className="btn btn-block btn-social btn-facebook">
                                                            <i className="fa fa-facebook" ></i>  Facebook Page
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                )
}