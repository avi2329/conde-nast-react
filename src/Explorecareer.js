import main1 from "./Images/Main-img1.jpg"

function Explorecareer() {
    return (
        <div className="main-image1 container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Work with us</h2>
                    <span className="container">
                        Join a global network of passionate people working to cover and shape
                        our world.
                    </span>
                    <div>
                        <button className="btn-success">
                            Explore Carrer Opportunities -&gt;
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={main1} />
                </div>
            </div>
        </div>

    )
}
export default Explorecareer