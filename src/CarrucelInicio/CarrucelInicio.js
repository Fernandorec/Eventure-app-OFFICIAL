import React from 'react';
import "./CarrucelInicio.css";

function CarrucelInicio() {
    const images = [
        "https://resizer.otstatic.com/v2/photos/xlarge/2/57756883.webp",
        "https://i.pinimg.com/564x/9f/77/51/9f77514cc58504f61ee872b101755e49.jpg",
        "https://i.pinimg.com/564x/84/48/33/8448332fe00becf3eb2d7c092e2670f6.jpg",
        "https://i.pinimg.com/564x/9e/8b/17/9e8b1715d32efba5625686a26dce2c4a.jpg",
        "https://i.pinimg.com/564x/ce/07/d7/ce07d7beb4f31f238cbd69e8a914ccbc.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEpA2rH9kxgA1bLE7fOBH7EFWZxx10XHqWQ&s",
        "https://resizer.otstatic.com/v2/photos/xlarge/2/57756883.webp",
        "https://cf.bstatic.com/xdata/images/hotel/270x200/248913184.jpg?k=9e35e88427ef2a072fde1c6ddb64e1d8d1534a63243ab9becdebe914345efe2e&o=",
        "https://i.pinimg.com/564x/84/48/33/8448332fe00becf3eb2d7c092e2670f6.jpg",
    ];

    return (
        <div className="carrusel-container">
            <div className="slider">
                <div className="slide-track">
                    {images.map((src, index) => (
                        <div key={index} className="sliderr">
                            <img className="imgg" src={src} alt={`sliderr ${index + 1}`} />
                        </div>
                    ))}
                    {/* Repetimos las mismas imágenes para el efecto de loop */}
                    {images.map((src, index) => (
                        <div key={index + images.length} className="sliderr">
                            <img className="imgg" src={src} alt={`sliderr ${index + 10}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CarrucelInicio;
