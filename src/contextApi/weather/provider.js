import React, {useState, useEffect} from 'react'
import MyContext from './context'


function MyProvider({children}) {

    const [api , setApi] = useState(null)

    const apiKey = 'f760d626c3f202d130cab9647f9f52b7';

    const apiCall = async (c) => {
        try {
            if (!c) {
                console.log('Enter your city')
            }
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${c}&units=metric&appid=${apiKey}`)
                .then(res => res.json())
                .then(res => setApi(res))
        } catch(error) {
            console.log('Error: ', error)
        }
    }

    useEffect(()=> {
        apiCall()
    }, [])
    
    console.log(api)
    return (
        <MyContext.Provider value={{apiCall, api}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider