import React from 'react'
import "./Phuk.css"
const Phuk = () => {
    return (
        <div className='pt-5'>
            <div className="phuk">
                <div className="container pb-5">
                    <div className="text-phuk d-flex flex-column align-items-center justify-content-center text-center">
                        <span className="span roboto-bold">Laser-focused</span>
                        <h1 className='roboto-bold'>on 3 key aspects of design.</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div className='home_aspects_card_number'>01</div>
                                    <span className='span_gradient'>Web Design</span>
                                    <p className='text-color-grey'>We create stunning, engaging and high-conversion websites based on the versatile and future-proof Webflow platform. Search engine optimisation and cutting-edge user experience design come as standard, along with exceptional reliability, scalability and performance. Plus, friendly support — whenever you need us.</p>
                                    <img src="/img/card.webp" class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div class="card">
                                <img src="/img/card2.webp" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div className='home_aspects_card_number'>02</div>
                                    <span className='span_gradient'>Graphic Design</span>
                                    <p className='text-color-grey'>Whether you’re building a brand from scratch, or developing new assets for your next campaign, we have a wealth of experience in logo design, brand identity development, and social media presence, along with signage, packaging and print design. We’ll support you through the whole journey, from concept to deliverable.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card3 mb-3" >
                        <div class="row g-0">
                            <div class="col-md-6 card-home">
                            <div className='home_aspects_card_number'>03</div>
                                    <span className='span_gradient'>Custom System <br /> Development</span>
                                    <p className='text-color-grey'>Whether you’re building a brand from scratch, or developing new assets for your next campaign, we have a wealth of experience in logo design, brand identity development, and social media presence, along with signage, packaging and print design. We’ll support you through the whole journey, from concept to deliverable.</p>
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                <img src="/img/card3.webp" class="img-fluid rounded-start" alt="..." />

                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-groups flex-align-center">
                    <a href="" className="buttonblue"> See our plans </a>
                    <a href="" className="buttonwhite"> Unique project? </a>
                </div>
            </div>

        </div>
    )
}

export default Phuk