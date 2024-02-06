import './Container.css'
import AnhPhim1 from '../../Images/Screenshot 2024-02-02 195329.png'
import AnhPhim2 from '../../Images/Screenshot 2024-02-02 195601.png'
import AnhPhim3 from '../../Images/Screenshot 2024-02-02 195411.png'
import AnhPhim4 from '../../Images/Screenshot 2024-02-02 195431.png'
import AnhPhim5 from '../../Images/Screenshot 2024-02-02 195449.png'
import AnhPhim6 from '../../Images/Screenshot 2024-02-02 195506.png'
import AnhPhim7 from '../../Images/Screenshot 2024-02-02 195524.png'
import AnhPhim8 from '../../Images/Screenshot 2024-02-06 185759.png'
import AnhPhim9 from '../../Images/Screenshot 2024-02-06 185617.png'
import AnhPhim10 from '../../Images/Screenshot 2024-02-02 195543.png'





const imageArray = [AnhPhim1, AnhPhim2, AnhPhim3, AnhPhim4, AnhPhim5, AnhPhim6, AnhPhim7, AnhPhim8, AnhPhim9, AnhPhim10]
const textArray = ['Fundation','Music Apple','H/JACK','Argylle','The DYnasty','The  Greatest beer run ever', 'Phim 07', 'Phim 08', 'Phim 09', 'Phim 10', 'Phim 11']

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
