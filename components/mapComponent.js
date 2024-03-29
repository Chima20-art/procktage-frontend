import { GoogleMap, Marker } from 'react-google-maps'

export default function MyMapComponent(props) {
    return (
        <div>
            {' '}
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {props.isMarkerShown && (
                    <Marker position={{ lat: -34.397, lng: 150.644 }} />
                )}
            </GoogleMap>
        </div>
    )
}
