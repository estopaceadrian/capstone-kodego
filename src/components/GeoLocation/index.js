import React, { useMemo, useState } from 'react';
import styles from './index.module.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div>
        <PlacesAutocomplete setSelected={setSelected} />
      </div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName={styles.mapContainer}
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestion,
  } = usePlacesAutocomplete();
  return;
};
