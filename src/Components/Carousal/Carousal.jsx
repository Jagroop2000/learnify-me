import { ABOUT_US } from '../../assets/config/Content';
import CarousalOne from '../../assets/img/e-learning.jpg';
import './carousal.css'
const Carousal = () => {

    return (
        <section className='section'>
            <div className="container-fluid p-0 mb-5">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid full-width-image" src={CarousalOne} alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center style-carousal-background">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                        <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                        <p className="fs-5 text-white mb-4 pb-2">{ABOUT_US}</p>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                        <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousal;