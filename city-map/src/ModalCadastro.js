import React from 'react';
import Modal from 'react-modal';
import './App.css';
import { useState } from 'react';

Modal.setAppElement('#root'); // Define o elemento raiz da aplicação para acessibilidade

function ModalCadastro({ isOpen, onClose, formData, onChange, onSubmit }) {
  const [errors, setErrors] = useState({
    nome: '',
    endereco: '',
    categoria: ''
  });

  const handleValidation = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.nome) {
      newErrors.nome = 'Preencha o campo \"Nome do Local\"';
      isValid = false;
    }

    if (!formData.endereco) {
      newErrors.endereco = 'Preencha o campo \"Endereço\"';
      isValid = false;
    }

    if (!formData.categoria) {
      newErrors.categoria = 'Selecione uma categoria';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      onSubmit(e);
    }
  };
  
  const handleModalClose = () => {
    onClose();
    setErrors({
      nome: '',
      endereco: '',
      categoria: ''
    });
    formData.nome = '';
    formData.endereco = '';
    formData.categoria = '';
    console.log('asdssss');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1001
        }
      }}
    ><div className="form-container">
      <h2 className="form-title">Adicionar Local</h2>
      <br/>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Nome do Local:
          <input
            className="form-input"
            type="text"
            name="nome"
            value={formData.nome}
            onChange={onChange}
          />
          {errors.nome && <span className="error-message">{errors.nome}</span>}
        </label>
        <br/>
        <label className="form-label">
          Endereço:
          <input
            className="form-input"
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={onChange}
          />
          {errors.endereco && <span className="error-message">{errors.endereco}</span>}
        </label>
        <br/>
        <label className="form-label">
          Latitude:
          <input
            className="form-input"
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={onChange}
            disabled
          />
        </label>
        <br/>
        <label className="form-label">
          Longitude:
          <input
            className="form-input"
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={onChange}
            disabled
          />
        </label>
        <br/>
        <label className="form-label">
          Categoria:
          <select
            className="form-select"
            name="categoria"
            value={formData.categoria}
            onChange={onChange}
          >
            <option value="">Selecione uma categoria</option>
            <option value="1">Alimentação</option>
            <option value="2">Tecnologia</option>
            <option value="3">Saúde</option>
            <option value="4">Serviços</option>
            <option value="5">Distribuição</option>
            <option value="6">Outros</option>
          </select>
          {errors.categoria && <span className="error-message">{errors.categoria}</span>}
        </label>
        <br/><br/>
        <button className="form-button-save" type="submit">Salvar</button>
        <button className="form-button-cancel" onClick={handleModalClose}>Cancelar</button>
      </form>
      </div>
    </Modal>
  );
}

export default ModalCadastro;
