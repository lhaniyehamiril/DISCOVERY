import { createContext, useContext, useEffect, useReducer } from "react";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { convertToEmoji } from "../utils/helpers";

const FormContext = createContext();

const initialState = {
    isLoadingGoeCoding: false,
    cityName: '',
    country: '',
    date: '',
    notes: '',
    emoji: '',
    geoCodingError: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'loading':
            return { ...state, isLoadingGoeCoding: action.payload }
        case 'city':
            return { ...state, cityName: action.payload };
        case 'country':
            return { ...state, country: action.payload };
        case "emoji":
            return { ...state, emoji: action.payload };
        case 'date':
            return { ...state, date: action.payload };
        case 'cityName':
            return { ...state, cityName: action.payload };
        case 'note':
            return { ...state, notes: action.payload };
        case 'error':
            return { ...state, geoCodingError: action.payload }
        default: throw new Error('not working')
    }
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
const FormProvider = ({ children }) => {
    const [{ cityName, date, country, notes, emoji, geoCodingError, isLoadingGoeCoding }, dispatch] = useReducer(reducer, initialState);
    const [lat, lng] = useUrlPosition();
    useEffect(() => {
        if (!lat && !lng) return;
        async function fetchCityData() {
            try {
                dispatch({ type: 'loading', payload: true })
                dispatch({ type: 'error', payload: '' })
                const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`)
                const data = await res.json();
                if (!data.countryCode) throw new Error("that doesnt seem to be a city click somewhere else")
                dispatch({ type: 'city', payload: data.city || data.locality || "" });
                dispatch({ type: 'country', payload: data.countryName })
                dispatch({ type: 'emoji', payload: convertToEmoji(data.countryCode) });
            } catch (err) {
                dispatch({ type: 'error', payload: err.message });
            } finally {
                dispatch({ type: 'loading', payload: false })
            }
        }
        fetchCityData()
    }, [lat, lng])
    return (
        <FormContext.Provider value={{ cityName, date, country, notes, emoji, geoCodingError, isLoadingGoeCoding, dispatch }}>
            {children}
        </FormContext.Provider>
    )
}

const useForm = () => {
    const context = useContext(FormContext)
    // if (context === undefined) return throw new Error("formContext was used outside of the formProvider");
    return context
}

export { FormProvider, useForm }