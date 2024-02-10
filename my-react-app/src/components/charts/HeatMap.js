import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import Papa from 'papaparse';
import csvFile from './data/coordinates.csv'; // Adjust the path as necessary

const Heatmap = () => {
  const [points, setPoints] = useState([]);
  const center = [37.983810, 23.727539]; // Adjust as needed

  useEffect(() => {
    Papa.parse(csvFile, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: function(results) {
        const parsedPoints = results.data.map(row => [parseFloat(row.Latitude), parseFloat(row.Longitude), 1]);
        setPoints(parsedPoints);
      }
    });
  }, []);

  return (
    <MapContainer center={center} zoom={6} className="leaflet-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.length > 0 && <HeatLayer points={points} />}
    </MapContainer>
  );
};

const HeatLayer = ({ points }) => {
  const map = useMap();

useEffect(() => {
  const heatLayer = L.heatLayer(points, {
    radius: 20,
    blur: 15,
    maxZoom: 17,
    gradient: {0.15: 'blue', 0.3: 'lime', 0.5: 'red'}
  }).addTo(map);

  // Adjust radius on zoom
  const onZoomEnd = () => {
    const currentZoom = map.getZoom();
    heatLayer.setOptions({ radius: currentZoom * 4 }); // Example scaling factor
  };

  map.on('zoomend', onZoomEnd);

  return () => {
    heatLayer.remove();
    map.off('zoomend', onZoomEnd);
  };
}, [points, map]);
};

export default Heatmap;
