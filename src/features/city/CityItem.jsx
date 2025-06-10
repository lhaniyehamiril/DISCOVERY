import { Link } from 'react-router-dom';
import { useCities } from '../../contexts/CitiesContext';

export const CityItem = ({ city }) => {
    const { cityName, id, position, emoji } = city;
    const { cities, setCities } = useCities()
    const deleteCity = cities?.filter(city => city.id !== id);
    const handleClick = (e) => {
        e.preventDefault();
        setCities(deleteCity)
    }
    return (
        <li className='w-[112%] 
            sm:w-80 bg-[--black] rounded-3xl'>
            <Link className='flex items-center justify-between p-4' to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <div className='flex gap-[7px] items-center justify-center'>
                    {emoji}
                    <h2 className='text-[13px]'>{cityName}</h2>
                </div>
                <div className='flex items-center justify-center bg-[--green] h-6 hover:bg-[#80ff67eb] rounded-full w-6'>
                    <button onClick={handleClick} className='text-[--black] text-xl font-bold '>&times;</button>
                </div>
            </Link>
        </li>
    )
}


