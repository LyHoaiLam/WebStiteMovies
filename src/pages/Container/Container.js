import './Container.css'
import AnhPhim1 from '../../Images/Screenshot 2024-02-02 195329.png'
import AnhPhim2 from '../../Images/Screenshot 2024-02-02 195601.png'
import AnhPhim3 from '../../Images/Screenshot 2024-02-02 195411.png'
import AnhPhim4 from '../../Images/Screenshot 2024-02-02 195431.png'
import AnhPhim5 from '../../Images/Screenshot 2024-02-02 195449.png'
import AnhPhim6 from '../../Images/Screenshot 2024-02-02 195506.png'

const imageArray = [AnhPhim1, AnhPhim2, AnhPhim3, AnhPhim4, AnhPhim5, AnhPhim6]
const textArray = ['Phim 01','Phim 02','Phim 03','Phim 04','Phim 05','Phim 06',]



function Container() {

    return (
        <div className='container'>
            {imageArray.map((image, index) => (
                <div key={index} className='image-container'>
                    <img className='container-img' src={image} alt={`Movie ${index + 1}`} />
                    <div className='text-overlay'>{textArray[index]}</div>
                </div>
            ))}
        </div>
    )
}

export default Container;
