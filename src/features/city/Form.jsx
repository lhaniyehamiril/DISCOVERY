import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

import { useCities } from '../../contexts/CitiesContext'
import { useForm } from "../../contexts/FormContext";

import { useAppNavigate } from "../../hooks/useAppNavigate";
import { useUrlPosition } from "../../hooks/useUrlPosition";

import { Message } from "../../ui/Message";
import { Loader } from "../../ui/Loader";
import { Button, LinkButton } from "../../ui/Button";
import { generateId } from "../../utils/helpers";


export const Form = () => {
    const navigate = useAppNavigate()
    const { setCities } = useCities();
    const [lat, lng] = useUrlPosition()
    const { cityName, date, country, notes, emoji, geoCodingError, isLoadingGoeCoding, dispatch } = useForm()
    const handleCities = (newCity) => {
        setCities(city => [...city, newCity])
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!cityName || !date) return toast.error('fill it')
        const newCity = {
            cityName,
            country,
            date,
            notes,
            emoji,
            position: { lat, lng },
            id: generateId()
        }
        await handleCities(newCity)
        toast.success('successful')
        navigate('/app')
    }
    if (isLoadingGoeCoding) return <Loader />
    if (geoCodingError) return <Message message={geoCodingError} />
    return (
        <section className="flex items-center -mt-3 justify-center  flex-col">
            <form onSubmit={handleSubmit}>
                <div className="flex p-6 h- sm:w-[330px] flex-col justify-center items-center gap-3">
                    <div className="relative">
                        <input id="cityName" value={cityName} onChange={e => dispatch({ type: 'cityName', payload: e.target.value })} type="text" placeholder="City name by clicking on the map" className="bg-[#111] rounded-full 
                      w-[16rem] h-[50px] pl-4 placeholder:text-[--green] text-[--green] text-[13px] focus:outline-none"/>
                        <span className="-translate-x-5 block absolute right-0 top-3 text-[--green]">{emoji}</span>
                    </div>
                    <DatePicker onFocus={e => e.target.blur()} id="date" placeholderText="when" onChange={date => dispatch({ type: 'date', payload: date })} selected={date} dateFormat='dd/MM/yyy' />
                    <textarea id="textarea" value={notes} onChange={e => dispatch({ type: 'note', payload: e.target.value })} type="text" placeholder="notes about your trip" className="bg-[#111] text-[13px]
                     text-center p-4 text-[--blue] placeholder:text-[--green] py-3 w-[16rem] rounded-3xl focus:outline-none"> </textarea>
                    <div className="flex gap-3">
                        <Button name='add'>add</Button>
                        <LinkButton name='back' to='/app' >back</LinkButton>
                    </div>
                </div>
            </form>
        </section>
    )
}

