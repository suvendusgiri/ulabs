import React, { Component } from "react";

class ContactUs extends Component {
    render() {
        return (
            <div id="dv_contact_us" class="page-top object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="text-center title">Contact Us</h1>
                            <div class="separator"></div>
                            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <br />
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="alert alert-success hidden" id="MessageSent">
                                        We have received your message, we will contact you very soon.
							</div>
                                    <div class="alert alert-danger hidden" id="MessageNotSent">
                                        Oops! Something went wrong please refresh the page and try again.
							</div>
                                    <div class="contact-form">
                                        <form id="contact-form" role="form">
                                            <div class="form-group has-feedback">
                                                <label for="name">Name*</label>
                                                <input type="text" class="form-control" id="name" name="name" placeholder="" />
                                                <i class="fa fa-user form-control-feedback"></i>
                                            </div>
                                            <div class="form-group has-feedback">
                                                <label for="email">Email*</label>
                                                <input type="email" class="form-control" id="email" name="email" placeholder="" />
                                                <i class="fa fa-envelope form-control-feedback"></i>
                                            </div>
                                            <div class="form-group has-feedback">
                                                <label for="subject">Subject*</label>
                                                <input type="text" class="form-control" id="subject" name="subject" placeholder="" />
                                                <i class="fa fa-navicon form-control-feedback"></i>
                                            </div>
                                            <div class="form-group has-feedback">
                                                <label for="message">Message*</label>
                                                <textarea class="form-control" rows="6" id="message" name="message" placeholder=""></textarea>
                                                <i class="fa fa-pencil form-control-feedback"></i>
                                            </div>
                                            <input type="submit" value="Submit" class="submit-button btn btn-default" />
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- sidebar start --> */}
                                <aside class="col-md-4">
                                    <div class="sidebar">
                                        <div class="side vertical-divider-left">
                                            <h3 class="title">Utkal Labs Private Limited</h3>
                                            <ul class="list">
                                                <li><strong>Head Office</strong></li>
                                                <li><i class="fa fa-home pr-10"></i>Raghunathpur, Bhubaneswar<br /><span class="pl-20">&nbsp;Odisha, India - 751024</span></li>
                                                <li><i class="fa fa-phone pr-10"></i><abbr title="Phone 1">P:</abbr>&nbsp;&nbsp;+91 9132994288, +91 9853438868</li>
                                                <li><i class="fa fa-envelope pr-10"></i><a href="mailto:contact@utkallabs.com">contact@utkallabs.com</a></li>
                                            </ul>
                                            <ul class="list">
                                                <li><strong>Sales Office<br />(UAE, Middle East and Europe)</strong></li>
                                                <li><i class="fa fa-home pr-10"></i>Flat-805, Al Burda Building, Al Qasimiya<br /><span class="pl-20">&nbsp;Sharjah, UAE</span></li>
                                                <li><i class="fa fa-phone pr-10"></i><abbr title="Phone 1">P:</abbr>&nbsp;&nbsp;+97 165377965</li>
                                                <li><i class="fa fa-mobile pr-10 pl-5"></i><abbr title="Phone">M:</abbr>&nbsp;+97 1559917573</li>
                                            </ul>
                                            <ul class="social-links colored circle small">
                                                <li class="facebook"><a target="_blank" href="http://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                                                <li class="twitter"><a target="_blank" href="http://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
                                                <li class="skype"><a target="_blank" href="http://www.skype.com"><i class="fa fa-skype"></i></a></li>
                                                <li class="linkedin"><a target="_blank" href="http://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                                {/* <!-- sidebar end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;