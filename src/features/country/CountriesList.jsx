import { useCities } from "../../contexts/CitiesContext";

import { CountriesItem } from "./CountriesItem";
import { Message } from "../../components/Message";


export const CountriesList = () => {
    const { cities } = useCities()
    if (!cities.length) return <Message message='add your first city by clicking on a city on the map' />
    const countries = cities?.reduce((arr, city) => {
        if (!arr.map(el => el.country).includes(city.countries))
            return [...arr, { country: city.country, emoji: city.emoji }]; else return arr
    }, [])

    return (
        <div className="container-scroll-box-app">
            <ul className="flex mt-3 items-center justify-center gap-4 p-5 text-[--green] flex-wrap">
                {countries.map(country => <CountriesItem country={country} />)}
            </ul>
        </div>
    )
}
