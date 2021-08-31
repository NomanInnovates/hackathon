import React from 'react'
import {FaMapMarkerAlt , FaRegClock} from 'react-icons/fa'
function ResturantCard({resturantName,resTags,resLogo,mainImg , timings, address}) {

    return (
        <div className="resturant-box">
            <div className="resturant-img">
                <img src={mainImg} alt="resturant img" />
            </div>
            <div className="resturant-body">
                <div className="res-name">{resturantName}</div>
                <div className="res-tags">{
                    resTags.map(item => {return <div className="res-tag">{item}</div>})
                }
                </div>
                <div className="resturant-footer">
                    <div className="res-footer-left"> 
                        <div className="res-logo">< img src={resLogo} alt="logo-small" /></div>
                    </div>
                    <div className="res-footer-right">
                    <div className="res-timings"> <FaRegClock/> {timings}</div>
                    <div className="res-address"> <FaMapMarkerAlt/> {address}</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ResturantCard
