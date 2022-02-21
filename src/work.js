import React, {useState} from 'react';
import '../gallery.css'
import 'materialize-css';
// import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../images/img1.1.jpg';
import Img2 from '../images/img1.2.jpg';
import Img3 from '../images/img1.3.jpg';
import Img4 from '../images/img2.1.jpg';
import Img5 from '../images/img2.2.jpg';
import Img6 from '../images/img2.3.jpg';
import Img7 from '../images/img4.1.jpg';
import Img8 from '../images/img4.2.jpg';
import Img9 from '../images/img4.3.jpg';
import Img10 from '../images/img5.1.jpg';
import Img11 from '../images/img5.2.jpg';
import Img12 from '../images/img5.3.jpg';
import Img13 from '../images/img3.1.jpg';
import Img14 from '../images/img3.2.jpg';
import Img15 from '../images/img3.3.jpg';
import Img16 from '../images/img6.1.jpg';
import Img17 from '../images/img6.2.jpg';
import Img18 from '../images/img6.3.jpg';
import Img19 from '../images/img7.1.jpg';
import Img20 from '../images/img7.2.jpg';
import Img21 from '../images/img7.3.jpg';
import Img22 from '../images/img8.1.jpg';
import Img23 from '../images/img8.2.jpg';
import Img24 from '../images/img8.3.jpg';
import Img25 from '../images/img9.1.jpg';
import Img26 from '../images/img9.2.jpg';
import Img27 from '../images/img9.3.jpg';



function Work (){


    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc: Img21,
        },
        {
            id: 22,
            imgSrc: Img22,
        },
        {
            id: 23,
            imgSrc: Img23,
        },
        {
            id: 24,
            imgSrc: Img24,
        },
        {
            id: 25,
            imgSrc: Img25,
        },
        {
            id: 26,
            imgSrc: Img26,
        },
        {
            id: 27,
            imgSrc: Img27,
        },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return(
        <>
        <div className = "black">
        <div ClassName = {model? "model open" : "model"}>
            <img src={tempimgSrc} />
            {/* <CloseIcon /> */}
            {/* <i class="material-icons">close</i> */}
        </div>
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%', height:'100%'}}/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Work