import React, { Component } from "react";

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div id="dv_about_us" class="page-top object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="text-center title">Who We Are</h1>
                                <div class="separator"></div>
                                <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <br />
                                <div class="row">
                                    <div class="col-md-8">
                                        <p>We are a team of experienced industry experts sharing a common goal to provide optimum solutions to any problem. We are experienced &amp; passionate to create sophisticated and scalable applications for any business.</p>
                                        <h3>Uspendisse id sem elementum condimentum lorem</h3>
                                        <p>Sed eget pulvinar quam, vel feugiat enim. Aliquam erat volutpat. Phasellus eu porta ipsum. Suspendisse aliquet imperdiet commodo. Aenean vel lacinia elit. Class aptent taciti sociosqu ad litora torquent per. Vestibulum velmo.</p>
                                        <ul class="list-icons">
                                            <li class="object-non-visible" data-animation-effect="fadeInUpSmall"><i class="icon-check"></i> Etiam sed dolor ac diam volutpat</li>
                                            <li class="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100"><i class="icon-check"></i> Sed eget pulvinar quam, vel feugiat enim aliquam </li>
                                            <li class="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="300"><i class="icon-check"></i> Erat volutpat. Phasellus eu porta ipsum suspendisse aliquet imperdiet</li>
                                            <li class="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="500"><i class="icon-check"></i> Phasellus eu porta ipsum. Suspendisse aliquet imperdiet commodo</li>
                                        </ul>
                                        <a class="btn btn-lg btn-default" href="page-team.html"><i class="fa fa-users pr-10"></i> Join Us</a>
                                    </div>
                                    {/* <!-- sidebar start --> */}
                                    <aside class="sidebar col-md-4">
                                        <div class="side vertical-divider-left">
                                            {/* <div class="block clearfix">
                                            <h3 class="title margin-top-clear">Latest projects</h3>
                                            <div class="separator"></div>
                                            <div class="gallery row">
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-1.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-2.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-3.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-4.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-5.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="gallery-item col-xs-4">
                                                    <div class="overlay-container">
                                                        <img src="assets/images/gallery-6.jpg" alt="" />
                                                        <a href="portfolio-item.html" class="overlay small">
                                                            <i class="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                            <h3 class="title">Testimonials</h3>
                                            <div class="separator"></div>
                                            <blockquote class="margin-clear">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem.</p>
                                                <footer><cite title="Source Title">Steve Doe </cite></footer>
                                            </blockquote>
                                            <blockquote class="margin-clear">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem.</p>
                                                <footer><cite title="Source Title">Steve Doe </cite></footer>
                                            </blockquote>
                                        </div>
                                    </aside>
                                    {/* <!-- sidebar end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section gray-bg clearfix">
                    <div class="container">
                        <div class="call-to-action">
                            <div class="row">
                                <div class="col-md-8">
                                    <h1 class="title text-center">Waste no more time</h1>
                                    <p class="text-center">Sed ut Perspiciatis Unde Omnis Iste Sed ut sit  voluptatem accusan tium </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="text-center">
                                        <a href="#" class="btn btn-default btn-lg">Request a Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;