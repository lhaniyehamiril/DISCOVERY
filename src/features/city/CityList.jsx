import styled from "styled-components";
import { useCities } from "../../contexts/CitiesContext";
import { CityItem } from "./CityItem"
import { Message } from "../../components/Message";

const Scroll = styled.div`
  overflow-y: scroll;
  height: 15.5rem;
  margin-top: 0.5rem;
  scroll-behavior: smooth;
`


export const CityList = () => {
    const { cities } = useCities()
    if (!cities.length) return <Message message='add your first city by clicking on a city on the map' />
    return (
        <Scroll>
            <ul className="flex gap-2 p-5 text-[--green] flex-col items-center justify-center">
                {cities?.map(city => <CityItem city={city} key={city.id} />)}
            </ul>
        </Scroll>
    )
}
