
export const CountriesItem = ({ country }) => {
    return (
        <li className="bg-[--black] rounded-2xl flex  items-center justify-center p-4 flex-col">
            {country.emoji}
            <h5 className='text-[13px] translate-y-1'>{country.country}</h5>
        </li>
    )
}
