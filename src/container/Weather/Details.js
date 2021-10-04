import React , {useContext} from 'react'
import Arrow from '../../assets/img/weather/Arrow.svg'
import MyContext from '../../contextApi/weather/context'
import {Link} from 'react-router-dom'

function Details() {
    const { api } = useContext(MyContext)
    return (
        <>

        {
            api && (
                <div className="mainApp">
                <div className="content-details">
                    <div className="header">
                        <Link to="/weather/city"><img src={Arrow} alt=""/></Link>
                        <h4>More Details</h4>
                    </div>

                    <div className="temp">
                        <h3>{api.list[0].main.temp}</h3>
                        <span>{api.list[0].weather[0].description}</span>
                    </div>

                    <div className="details-list">
                        <ul>
                            <li>
                                <h4>{api.list[0].main.pressure}</h4>
                                <span>Pressure</span>
                            </li>
                            <li>
                                <h4>{api.list[0].main.humidity}%</h4>
                                <span>Humidty</span>
                            </li>
                            <li>
                                <h4>{api.list[0].wind.speed}km</h4>
                                <span>Wind</span>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <h4>{api.list[0].weather[0].main}</h4>
                                <span>status</span>
                            </li>
                            <li>
                                <h4>{api.list[0].main.grnd_level}</h4>
                                <span>Ground Level</span>
                            </li>
                            <li>
                                <h4>{api.list[0].main.sea_level}</h4>
                                <span>Sea Level</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            )
        }

        </>
    )
}

export default Details