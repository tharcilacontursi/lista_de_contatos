import React, { useState, FormEvent } from "react";
import { useDispatch } from 'react-redux'
import { Botao, CampoForm, ContainerFormulario, Form, Label, Title } from "./styles";
import Contato from "../models/Contatos";
import { cadastrar } from "../store/reducers/contatoreducer";


export const Formulario = () => {
    const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const contatoParaAdicionar = new Contato(nome, email, telefone)
    dispatch(cadastrar(contatoParaAdicionar))

    setNome('');
        setEmail('');
        setTelefone('');
  }

    return (
      <ContainerFormulario>
      <Title>Adicionar contato:</Title>
      <Form onSubmit={cadastrarContato}>
        <Label htmlFor="nome">Nome:</Label>
        <CampoForm value= {nome} onChange={(evento) => setNome(evento.target.value)} />
        <Label htmlFor="email">Email:</Label>
        <CampoForm value= {email} onChange={(evento) => setEmail(evento.target.value)}/>
        <Label htmlFor="telefone">Número de telefone:</Label>
        <CampoForm value= {telefone} onChange={(evento) => setTelefone(evento.target.value)}/>
        <Botao type="submit">Cadastrar</Botao>
      </Form>
    </ContainerFormulario>
    )
  };

