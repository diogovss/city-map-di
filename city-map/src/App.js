import {useEffect,useState} from 'react';
import axios from 'axios';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

function App() {

  const [points,setPoints] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:8000/home')
    .then(function(res){
      setPoints(res.data);
    })
  },[])


  return (
    <div className='map'>
      <h1 className='map-heading'>City Map</h1>
      <p className='map-paragraph'>
        Voce tem <b>{points.length}</b> lugares marcados no mapa.<br/>
        Clique em cada um para ver os detalhes ou clique em outro lugar do mapa para cadastrar um novo local.
      </p>
    </div>
  );

}

export default App;
