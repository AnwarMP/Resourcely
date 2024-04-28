import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import mockResources from '../data/mockResources';
import 'leaflet/dist/leaflet.css';
import redLocationIcon from '../assets/pin.png'; // Import the icon image here

// Create an icon instance for Leaflet
const customIcon = new L.Icon({
  iconUrl: redLocationIcon,
  iconSize: [35, 35], // Size of the icon
  iconAnchor: [17, 35], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -35], // Point from which the popup should open relative to the iconAnchor
});

const ResourceMap = () => {
  return (
    <MapContainer center={[30.3322, -81.6557]} zoom={16} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {mockResources.map(resource => (
        <Marker 
          key={resource.id} 
          position={[resource.latitude, resource.longitude]} 
          icon={customIcon}
        >
          <Popup>
            <div>
              <p>{resource.type}: {resource.details}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ResourceMap;
