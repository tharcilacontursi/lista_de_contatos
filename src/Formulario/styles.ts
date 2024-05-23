import { styled } from "styled-components";

export const ContainerFormulario = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
height: 30vh;
margin-top:80px;
`

export const Title = styled.h2`
text-align: center;
margin-bottom: 20px;
`

export const CampoForm = styled.input`
padding: 8px;
background-color: #dfe6e9;
border-radius: 8px;
font-weight: bold;
color: #636e72;
border-color: #636e72;
width: 100%;
margin-bottom: 10px;
`

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #2d3436;
`

export const Form = styled.form`
align-items: center;
text-align: center;
max-width: 547px;
width: 100%;
margin: 0 auto;
`

export const Botao = styled.button`
border-radius: 4px;
background-color: #2d3436;
color: #dfe6e9;
height: 50px;
margin-bottom: 10px;
font-weight: bold;
width: 100px;
transition: background-color 0.3s;
&:hover {
    background-color: #636e72;}
`
