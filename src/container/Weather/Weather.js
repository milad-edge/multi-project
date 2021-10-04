import React, {useContext, useState} from 'react'
import MyContext from '../../contextApi/weather/context'
import '../../assets/sass/weather/main.scss'
import Logo from '../../assets/img/weather/Logo.svg'
import {Link, useHistory} from 'react-router-dom';


function Weather() {
    const history = useHistory()
    const { apiCall, api } = useContext(MyContext)
    const [cityName , setCityName] = useState('')
    
    const handleInput = (e) => {
        const value = e.target.value;
        setCityName(value);
    }

    const handleClick = () => {
        apiCall(cityName)
        if(api.cod == 200) {
            history.push('/weather/city')
        }
    }

    console.log(api)
    return(
        <section className="mainApp">
            <div className="main">
                <div className="logo">
                    <img src={Logo} alt="Weather" />
                </div>
                <div className="title">
                    <h1>Weather App</h1>
                </div>
            <div className="form">
                <input type="search" placeholder="Enter Your City" onChange={handleInput} value={cityName}/>
                <button onClick={handleClick}>Search</button>
            </div>
            </div>
        </section>
    )
}

export default Weather;