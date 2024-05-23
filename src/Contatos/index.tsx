import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../store";
import { ContainerContatos, Title, Text, ContainerContatoIndividual, Button } from "./styles";
import { editar, excluir } from "../store/reducers/contatoreducer";

export const ContatosList = () => {
  const contatos = useSelector((state: RootReducer) => state.contato.contatos);
  const dispatch = useDispatch();

  const [estaEditando, setEstaEditando] = useState<null | number>(null);
  const [contatoEditado, setContatoEditado] = useState({ nome: '', email: '', telefone: '' });

  const editaClick = (index: number) => {
    if (contatos[index]) {
      setEstaEditando(index);
      setContatoEditado(contatos[index]);
    } else {
      console.error("Contato não encontrado no índice fornecido:", index);
    }
  };

  const atualizaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContatoEditado((prevState) => ({ ...prevState, [name]: value }));
  };

  const atualizaEdicaoSubmit = (index: number) => {
    if (contatoEditado.nome && contatoEditado.email && contatoEditado.telefone) {
      dispatch(editar({ index, contatoEditado }));
      setEstaEditando(null);
    } else {
      console.error("Todos os campos precisam ser preenchidos");
    }
  };

  const deletar = (index: number) => {
    if (contatos[index]) {
      dispatch(excluir(index));
    } else {
      console.error("Contato não encontrado no índice fornecido:", index);
    }
  };

  return (
    <ContainerContatos>
      <Title>Contatos:</Title>
      {contatos.map((contato, index) => (
        <ContainerContatoIndividual key={index}>
          {estaEditando === index ? (
            <>
              <input
                type="text"
                name="nome"
                value={contatoEditado.nome}
                onChange={atualizaInput}
                placeholder="Nome"
              />
              <input
                type="text"
                name="email"
                value={contatoEditado.email}
                onChange={atualizaInput}
                placeholder="Email"
              />
              <input
                type="text"
                name="telefone"
                value={contatoEditado.telefone}
                onChange={atualizaInput}
                placeholder="Telefone"
              />
              <Button onClick={() => atualizaEdicaoSubmit(index)}>Salvar</Button>
              <Button onClick={() => setEstaEditando(null)}>Cancelar</Button>
            </>
          ) : (
            <>
              <Text>Nome: {contato.nome}</Text>
              <Text>Email: {contato.email}</Text>
              <Text>Telefone: {contato.telefone}</Text>
              <Button onClick={() => editaClick(index)}>Editar</Button>
              <Button onClick={() => deletar(index)}>Excluir</Button>
            </>
          )}
        </ContainerContatoIndividual>
      ))}
    </ContainerContatos>
  );
};
