import React , {useContext} from 'react'
import MyContext from '../../contextApi/weather/context'
import {Link} from 'react-router-dom'

import Location from '../../assets/img/weather/Location.svg'
import Logo from '../../assets/img/weather/Logo.svg'
import leaf from '../../assets/img/weather/leaf.svg'
import Arrow from '../../assets/img/weather/Arrow.svg'

function City() {
    const { api } = useContext(MyContext);
    
    return (
    <>
        {
            api && (
            <section className="mainApp">
            <div className="content">
                <div className="header">
                    <Link to="/weather"><img src={Arrow} alt="" className="arrow"/></Link>
                    <div className="location">
                        <img src={Location} alt="location"/>
                        <span>{api.city.name}</span>
                    </div>
                </div>

                <div className="icon-status">
                    <img src={Logo} alt=""/>
                </div>

                <div className="temp-status">
                    <h3>{api.list[0].main.temp}</h3>
                    <span>o C</span>
                </div>

                <div className="status-weather">
                    <h5>{api.list[0].weather[0].description}</h5>
                    <div className="leaf-btn">
                        <img src={leaf} alt=""/>
                        <span>AQI</span>
                    </div>
                </div>

                <div className="future-days">
                    <ul>
                        {api.list
                            .splice(0, 4)
                            .map((item, key) => (
                                <li key={key}>
                                    <span className="days">
                                        {new Date(item.dt).toLocaleDateString('en-US', {weekday: 'short'})
}
                                    </span>
                                    <div className="status">
                                        <img src={Logo} alt=""/>
                                        <span>{item.weather[0].main}</span>
                                    </div>
                                    <div className="temp">
                                        <h5>{item.main.temp}</h5>
                                        <span>o C</span>
                                    </div>
                                </li>
                            ))
}
                    </ul>
                </div>

                <div className="more-details">
                    <Link to="/weather/details">
                        <span>More Details</span>
                        <img src={Arrow} alt=""/>
                    </Link>
                </div>
            </div>
        </section>
        )
        }    
    </>
)
}

export default City;
