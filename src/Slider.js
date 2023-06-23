import img1 from './Images/img1.jpeg'
import img2 from './Images/img2.jpeg'
import img3 from './Images/img3.jpeg'
import img4 from './Images/img4.jpeg'
import img5 from './Images/img5.jpeg'
function Slider() {
    return (
        <div className="images-slide container-fluid">
            <img className="mySlides" src={img1} alt="Image 1" />
            <img className="mySlides" src={img2} alt="Image 2" />
            <img className="mySlides" src={img3} alt="Image 3" />
            <img className="mySlides" src={img4} alt="Image 4" />
            <img className="mySlides" src={img5} alt="Image 5" />
        </div>

    )
}
export default Slider