import axios from "axios"

const myAPI = "4cffd463bc560fdc8ab8857670ceb56e"

const getWeather = async(city) =>{
    try{
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                apiId: myAPI,
                city: city,
                units: "metric"
            },
        })
        return result.data
    }catch (error){
        <h1>There has been an error in fetching the data.. Try again</h1>
    }
}

export default getWeather