import React from 'react';
import cook1 from '../../images/cook1.jpg'
import cook2 from '../../images/cook2.jpg'
import cook3 from '../../images/cook3.jpg'
const HomeSlider = () => {
    return (
        <div>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={cook1} style={{ height: '650px' }} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Cooking is an art & We are the Artist</h5>
                            <p>Get Professional Cooking Training From us.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={cook2} style={{ height: '650px' }} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Cooking is an art & We are the Artist</h5>
                            <p>Get Professional Cooking Training From us.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={cook3} style={{ height: '650px' }} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Cooking is an art & We are the Artist</h5>
                            <p>Get Professional Cooking Training From us.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default HomeSlider;