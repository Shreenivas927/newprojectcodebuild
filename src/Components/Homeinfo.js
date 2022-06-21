import React from 'react'
import avtar1 from '../img/propdeal-logo.png'
import sliderimg4 from '../img/img4.jpg'
import sliderimg3 from '../img/img3.jpg'
import sliderimg2 from '../img/img2.jpg'
import sliderimg1 from '../img/img1.jpg'
import banner1 from '../img/banner1.jpg'
import banner2 from '../img/banner2.jpg'
import banner4 from '../img/banner4.jpg'

function Homeinfo() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={avtar1}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-2">
                                <a class="nav-link active" aria-current="page" href="#"><b>Home</b></a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#"><b>Residencial Property</b></a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#"><b>Commercial Property</b></a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link" href="#"><b>Blog</b></a>
                            </li>


                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    </div>
     {/* Slidder  */}
    <div class="container-fluid">
        <div class="row">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner4} class="d-block w-100 " alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner1} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="pt-5 pb-3">
                <h1 class="" id="h1hove">Best new launches in Pune West</h1>

            </div>

            <div class="pb-3">Find upcoming new housing residential real estate projects in Pune West with lifestyle
                amenities and proximity to key destinations.</div>

        </div>

    </div>
    <div class="container">
        <div class="row justify-content-center">
            <a href="./Prop1.html" style={{textDecoration:"none",color:"black"}}>
                <div class="col-md-3">
                    <div class="card" style={{width: "18rem", height: "22rem"}}>
                        <img src={sliderimg1} class="card-img-top card-img" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Mantra Codename Infinity</h5>
                            <div class="text-center">
                                <p class="card-text">By Mantra Codename Infinity Developer Pune</p>
                                <a href="#" class="btn btn-danger rounded-pill">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <div class="col-md-3">
                <div class="card" style={{width: "18rem",height: "22rem"}}>
                    <img src={sliderimg2} class="card-img-top card-img" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Godraj 24</h5>
                        <div class="text-center">
                            <p class="card-text">By Godraj Properties Limited Hinjvadi Pune</p>
                            <a href="#" class="btn btn-danger rounded-pill">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card" style={{width: "18rem", height: "22rem"}}>
                    <img src={sliderimg3} class="card-img-top card-img" alt="..."/>
                    <div class="card-body ">
                        <h5 class="card-title text-center">Rahul Aston</h5>
                        <div class="text-center">
                            <p class="card-text ">By Rahul Aston Developer Pune</p>
                            <a href="#" class="btn btn-danger rounded-pill ">View Details</a>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card" style={{width: "18rem", height: "22rem"}}>
                    <img src={sliderimg4} class="card-img-top card-img" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Rohan Prathama</h5>
                        <div class="text-center">
                            <p class="card-text">By Rohan Prathama constuction Pune</p>
                            <a href="#" class="btn btn-danger rounded-pill">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Homeinfo
