import React from 'react';
import mapMarkerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import '../styles/screens/OrphanageMap.css'

function OrphanageMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" ></img>

                    <h1>Escolha um orfanato no mapa</h1>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>
                        Rio do Sul
                    </strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>

            <Map 
                center={[-28.9431276,-49.4805896]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
    )
}

export default OrphanageMap;