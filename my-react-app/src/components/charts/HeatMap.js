import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import Papa from "papaparse";
import csvFile from "./data/coordinates.csv"; // Adjust the path as necessary
const bounds = [
  [34.88, 19.37], // Southwestern corner of the bounding box
  [41.75, 29.65], // Northeastern corner of the bounding box
];
const Heatmap = () => {
  const [points, setPoints] = useState([]);
  const center = [37.98381, 23.727539]; // Adjust as needed

  useEffect(() => {
    Papa.parse(csvFile, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: function (results) {
        const parsedPoints = results.data.map((row) => [
          parseFloat(row.Latitude),
          parseFloat(row.Longitude),
          1,
        ]);
        setPoints(parsedPoints);
      },
    });
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={6}
      minZoom={5}
      maxZoom={9}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
      className="leaflet-container"
    >
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
  let radiusOption = map.getZoom();
  console.log(radiusOption);
  useEffect(() => {
    radiusOption = map.getZoom();

    const heatLayer = L.heatLayer(points, {
      radius: radiusOption * 4,
      blur: 10,
      maxZoom: 17,
      gradient: { 0.18: "blue", 0.22: "lime", 0.4: "red" },
    }).addTo(map);

    // Adjust settings on zoom (zoom starts from 6 with current bounds)
    const onZoomEnd = () => {
      // const currentZoom = map.getZoom();
      radiusOption = map.getZoom();
      let zoom = 17;
      let blur = 10;
      console.log(radiusOption);
      // radiusOption = radiusOption*6

      if (radiusOption > 7) {
        // zoom = 17
        blur = 7;
        radiusOption = radiusOption * 6;
      } else {
        radiusOption = radiusOption * 4;
      }
      heatLayer.setOptions({
        radius: radiusOption,
        blur: blur,
        maxZoom: zoom,
        gradient: { 0.18: "blue", 0.22: "lime", 0.3: "red" },
      }); // Example scaling factor
    };

    map.on("zoomend", onZoomEnd);

    return () => {
      heatLayer.remove();
      map.off("zoomend", onZoomEnd);
    };
  }, [points, map]);
};

export default Heatmap;
