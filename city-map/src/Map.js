import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import ModalCadastro from './ModalCadastro';
import axios from 'axios';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';

function Map() {
  const [points, setPoints] = useState([]);
  const [position, setPosition] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
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
        const response = await axios.get('http://localhost:8000/home');
        setPoints(response.data);
      } catch (error) {
        console.error('Erro ao carregar pontos do JSON:', error);
      }
    };

    fetchPoints();
  }, []);

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/point-interest/', {
        nome: formData.nome,
        endereco: formData.endereco,
        latitude: formData.latitude,
        longitude: formData.longitude,
        categoria: formData.categoria
      });
      console.log('Dados enviados com sucesso:', response.data);
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        endereco: '',
        latitude: '',
        longitude: '',
        categoria: ''
      });
      // Fechar o modal após o envio bem-sucedido
      handleModalClose();
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {points.map((point, index) => (
        <Marker key={index} position={[point.latitude, point.longitude]} icon={L.icon({ iconUrl: markerIcon })}>
          <Popup>
            <div>
              <p>Nome: {point.nome}</p>
              <p>Endereço: {point.endereco}</p>
              <p>Categoria: {mapCategoryToLabel(point.categoria)}</p>
              <p>Latitude: {point.latitude}</p>
              <p>Longitude: {point.longitude}</p>
            </div>
          </Popup>
        </Marker>
      ))}
        <AddMarkerToClick />
            {position && <Marker position={position} icon={L.icon({ iconUrl: markerIcon })}>
            <Popup>
                Latitude: {position.lat}<br/>
                Longitude: {position.lng}<br/>
                {position && (
                    <button onClick={handleModalOpen}>Adicionar Local</button>
                )}
            </Popup>
        </Marker>}
      </MapContainer>
      
      <ModalCadastro
        isOpen={modalOpen}
        onClose={handleModalClose}
        formData={formData}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Map;
