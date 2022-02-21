import React, {useState} from 'react';
import '../gallery.css'
import 'materialize-css';
// import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../images/img1.11.jpg';
import Img2 from '../images/img1.22.jpg';
import Img3 from '../images/img1.33.jpg';
import Img4 from '../images/img2.11.jpg';
import Img5 from '../images/img2.22.jpg';
import Img6 from '../images/img2.33.jpg';
import Img7 from '../images/img3.11.jpg';
import Img8 from '../images/img3.22.jpg';
import Img9 from '../images/img3.33.jpg';
// import Img7 from '../images/img4.1.jpg';
// import Img8 from '../images/img4.2.jpg';
// import Img9 from '../images/img4.3.jpg';
// import Img10 from '../images/img5.1.jpg';
// import Img11 from '../images/img5.2.jpg';
// import Img12 from '../images/img5.3.jpg';
// import Img16 from '../images/img6.1.jpg';
// import Img17 from '../images/img6.2.jpg';
// import Img18 from '../images/img6.3.jpg';



function Style (){


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
        // {
        //     id: 10,
        //     imgSrc: Img10,
        // },
        // {
        //     id: 11,
        //     imgSrc: Img11,
        // },
        // {
        //     id: 12,
        //     imgSrc: Img12,
        // },
        // {
        //     id: 13,
        //     imgSrc: Img13,
        // },
        // {
        //     id: 14,
        //     imgSrc: Img14,
        // },
        // {
        //     id: 15,
        //     imgSrc: Img15,
        // },
        // {
        //     id: 16,
        //     imgSrc: Img16,
        // },
        // {
        //     id: 17,
        //     imgSrc: Img17,
        // },
        // {
        //     id: 18,
        //     imgSrc: Img18,
        // },
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

export default Style