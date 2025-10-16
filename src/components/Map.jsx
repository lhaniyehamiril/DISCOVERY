import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet"
import { useEffect, useState } from "react"
import { useUrlPosition } from "../hooks/useUrlPosition"
import { useAppNavigate } from "../hooks/useAppNavigate"
import { useCities } from '../contexts/CitiesContext'


export const Map = () => {
    const [mapPosition, setMapPosition] = useState([40, 0])
    const { cities } = useCities()
    const [mapLat, mapLng] = useUrlPosition();

    useEffect(() => {
        if (mapLat && mapLng) setMapPosition([mapLat, mapLng])
    }, [mapLat, mapLng])

    return (
        <MapContainer center={mapPosition} zoom={5} scrollWheelZoom={true} className="w-[76%] h-[160px] iphoneFourteen:h-[160px] phone:w-[330px] sm:w-[45%] lg:w-[60%] sm:h-[370px] lg:h-[400px] rounded-2xl">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            {cities.map(city => <Marker position={[city.position.lat, city.position.lng]} key={city.id} >
                <Popup>
                    <div className="flex items-center gap-[6px] justify-center">
                        <span>{city.emoji}</span>
                        <span>{city.cityName}</span>
                    </div>
                </Popup>
            </Marker>
            )}
            <ChangeCenter position={mapPosition} />
            <DetectClick />
        </MapContainer>
    )
}

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

function DetectClick() {
    const navigate = useAppNavigate()
    useMapEvents({
        click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
}