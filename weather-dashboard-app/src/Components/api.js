import axios from "axios"

const myAPI = "4cffd463bc560fdc8ab8857670ceb56e"

const getWeather = async(city) =>{
    try{
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                appId: myAPI,
                q: city,
                units: "metric"
            },
        })
        return result.data
    }catch (error){
        console.error("Unable to fetch data :(", error)
        throw error
    }
}

export default getWeather