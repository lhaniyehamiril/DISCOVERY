import { BoxAppLayOut } from '../ui/BoxAppLayout'
import { Map } from '../ui/Map'

export const AppLayout = () => {
    return (
        <div className="flex items-center mt-9 iphone:mt-6 iphoneFourteen:mt-8 sm:h-[95vh] justify-center flex-col gap-10 lg:gap-5 lg:flex-row ">
            <BoxAppLayOut />
            <Map />
        </div>
    )
}
