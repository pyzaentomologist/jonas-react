import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from './Map.module.css';
import { useCities } from "../hooks/useCities";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { flagemojiToPNG } from "../utils/flagemojiToPNG";
import { Button } from './Button';

export function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition) setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);
  console.log(geolocationPosition)
  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && <Button type="position" onClick={getPosition}>{isLoadingPosition ? "Loading..." : "Use position"}</Button>}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              <span>{flagemojiToPNG(city.emoji)}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick/>
      </MapContainer>
    </div>
  );
}

function ChangeCenter(props) {
  const { position } = props;
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}