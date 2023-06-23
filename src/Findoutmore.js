import main from './Images/main-image.jpg'

function Findoutmore() {
    return (
        <div className="main-image container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={main} alt='Main-Image' />
                </div>
                <div className="col-md-6">
                    <h2>Operating in 32 markets</h2>
                    <span className="container">
                        We are a collection of more than 6,000 individuals serving 37 brands in
                        26 languages, spanning 32 markets worldwide including China, France,
                        Germany, India, Italy, Japan, Mexico and Latin America, Spain, Taiwan,
                        the U.K. and the U.S. with additional license partners around the globe.
                    </span>
                    <div>
                        <button className=" find-out-more btn-success">
                            Find out more -&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Findoutmore;