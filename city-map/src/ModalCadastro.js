import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define o elemento raiz da aplicação para acessibilidade

function ModalCadastro({ isOpen, onClose, formData, onChange, onSubmit }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000 // Defina um valor alto para garantir que o modal seja renderizado acima do mapa
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1001 // Defina um valor ainda maior para garantir que o conteúdo do modal seja renderizado acima do overlay
        }
      }}
    >
      <h2>Adicionar Local</h2>
      <form onSubmit={onSubmit}>
        <label>
          Nome do Local:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={onChange}
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={onChange}
          />
        </label>
        <label>
          Latitude:
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={onChange}
            disabled
          />
        </label>
        <label>
          Longitude:
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={onChange}
            disabled
          />
        </label>
        <label>
          Categoria:
          <select
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
        </label>
        <button type="submit">Salvar</button>
        <button onClick={onClose}>Fechar</button>
      </form>
    </Modal>
  );
}

export default ModalCadastro;
