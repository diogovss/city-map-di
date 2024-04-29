import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import ModalCadastro from './ModalCadastro';
import axios from 'axios';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import API_URL from './api';

function Map() {
  const [points, setPoints] = useState([]);
  const [position, setPosition] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    latitude: position ? `${position.lat.toFixed(4)}` : '',
    longitude: position ? `${position.lng.toFixed(4)}` : '',
    categoria: ''
  });

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await axios.get(API_URL);
        setPoints(response.data);
      } catch (error) {
        console.error('Erro ao carregar pontos do JSON:', error);
      }
    };

    fetchPoints();
  }, []);

  const handleClick = (event) => {
    setPosition(event.latlng);
  };

  function AddMarkerToClick() {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
        setFormData({
          ...formData,
          latitude: `${e.latlng.lat.toFixed(4)}`,
          longitude: `${e.latlng.lng.toFixed(4)}`
        });
      },
    });
    return null;
  }

  const colorsByCategory = {
    1: 'red',
    2: 'blue',
    3: 'green',
    4: 'orange',
    5: 'purple'
  };
  
  const mapCategoryToLabel = (categoryNumber) => {
    switch (categoryNumber) {
      case 1:
        return 'Alimentação';
      case 2:
        return 'Tecnologia';
      case 3:
        return 'Saúde';
      case 4:
        return 'Serviços';
      case 5:
        return 'Distribuição';
      default:
        return 'Outro';
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setPosition(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, {
        nome: formData.nome,
        endereco: formData.endereco,
        latitude: formData.latitude,
        longitude: formData.longitude,
        categoria: formData.categoria
      });

      setPoints([...points, response.data]);
      console.log('Dados enviados com sucesso:', response.data);
      setSuccessMessage('Cadastro realizado com sucesso!');
      setFormData({
        nome: '',
        endereco: '',
        latitude: '',
        longitude: '',
        categoria: ''
      });
      handleModalClose();
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div className='map'>
      <div>
        <p className='map-paragraph'>
          Voce tem <b>{points.length}</b> lugares marcados no mapa.<br/>
          Clique em cada um para ver os detalhes ou clique em outro lugar do mapa para cadastrar um novo local.
        </p>
      </div>
    <br/><br/><br/>
      <MapContainer center={[0, 0]} zoom={2} onClick={handleClick} style={{ height: '400px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {points.map((point, index) => (
        <Marker 
          key={index} 
          position={[point.latitude, point.longitude]} 
          icon={L.divIcon({className: 'custom-marker', html: `<div style="width: 15px; height: 15px; border-radius: 50%; background-color: ${colorsByCategory[point.categoria]};"></div>`})}
          eventHandlers={{mouseover: (event) => event.target.openPopup()}}
        >
          <Popup>
            <div>
              <h2 className='form-title'>Dados do Local</h2>
              <p className='form-label'><b>Nome:</b> {point.nome}</p>
              <p className='form-label'><b>Endereço:</b> {point.endereco}</p>
              <p className='form-label'><b>Categoria:</b> {mapCategoryToLabel(point.categoria)}</p>
              <p className='form-label'><b>Latitude:</b> {point.latitude}</p>
              <p className='form-label'><b>Longitude:</b> {point.longitude}</p>
            </div>
          </Popup>
        </Marker>
      ))}
        <AddMarkerToClick />
            {position && <Marker position={position} icon={L.icon({ iconUrl: markerIcon })}>
          </Marker> && (
        <Popup position={position}>
          <p className="form-label">
            <b>Latitude:</b> <br /> {position.lat}
          </p>
          <p className="form-label">
            <b>Longitude:</b> <br /> {position.lng}
          </p>
          <button className="form-button-add" onClick={handleModalOpen}>Adicionar Local</button>
        </Popup>
      )}

          <div className="legend" style={{ position: 'absolute', zIndex: '1000', left: '10px', top: 'auto', bottom: '10px', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
            <h4 className='form-label'>Legenda</h4>
            <div className='form-label'>
              <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: 'red', marginRight: '5px', borderRadius: '50%' }}></span> Alimentação
            </div>
            <div className='form-label'>
              <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: 'blue', marginRight: '5px', borderRadius: '50%' }}></span> Tecnologia
            </div>
            <div className='form-label'>
              <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: 'green', marginRight: '5px', borderRadius: '50%' }}></span> Saúde
            </div>
            <div className='form-label'>
              <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: 'orange', marginRight: '5px', borderRadius: '50%' }}></span> Serviços
            </div>
            <div className='form-label'>
              <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: 'purple', marginRight: '5px', borderRadius: '50%' }}></span> Distribuição
            </div>
          </div>
      </MapContainer>
      <ModalCadastro
        isOpen={modalOpen}
        onClose={handleModalClose}
        formData={formData}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
      />
      {successMessage && (
        <div className="success-message">
          <div className="message-box">
            <p>{successMessage}</p>
          </div>
        </div> 
      )}
    </div>
  );
}

export default Map;
