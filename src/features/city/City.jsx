import { useParams } from "react-router-dom"
import { HiMiniPaperClip } from "react-icons/hi2";
import { TbCircleArrowLeftFilled } from "react-icons/tb";

import { useCities } from "../../contexts/CitiesContext";
import { formatData } from "../../utils/helpers";
import { LinkButton } from "../../components/Button";
import styled from "styled-components";

const Scroll = styled.p`
  overflow-y: scroll;
  height: 2rem;
  scroll-behavior: smooth;
`


export const City = () => {
    const { id } = useParams();
    const { cities } = useCities();
    const dataCountry = cities?.find(data => data.id === parseInt(id))
    const { cityName, date, notes, emoji } = dataCountry;
    return (
        <div className="flex items-center flex-col gap-[7px] justify-center">
            <div className="flex gap-1 items-center mt-3 justify-between p-4 flex-row w-[93%] phone2:w-[18rem] 
            sm:w-80 bg-[--black] rounded-3xl">
                <div className='flex gap-[6px] items-center justify-center'>
                    <span>{emoji}</span>
                    <h2 className="text-[--green] text-[13px]">{cityName}</h2>
                </div>
                <time className='text-[10px] bg-[--green] px-2 py-[6px] text-[--black] text-center rounded-full'>{formatData(date)}</time>
            </div>
            <div className="w-[93%] phone2:w-[18rem]  p-3 py-5 flex flex-col gap-3 text-[--green]
             sm:w-80 bg-[--black] rounded-[1.2rem]">
                <LinkButton to='-1' name='arrow' >
                    <TbCircleArrowLeftFilled size='1.8rem' />
                </LinkButton>
                <div className="pl-2 -mt-11">
                    <h6 className="text-sm sm:text-[15px]">your note</h6>
                    <Scroll className="text-sm translate-y-2 text-[--blue]">{notes}</Scroll>
                </div>

                <div className="mt-[6px] pl-2">
                    <h6 className="text-sm sm:text-[15px]">Learn more</h6>
                    <a className="text-[--blue] text-[13px] underline"
                        href={`https://en.wikipedia.org/wiki/${cityName}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex items-center mt-2">
                            <HiMiniPaperClip className="mr-[1px]" />
                            Wikipedia  {cityName}
                        </div>
                    </a>
                </div>
            </div>
        </div >

    )
}
