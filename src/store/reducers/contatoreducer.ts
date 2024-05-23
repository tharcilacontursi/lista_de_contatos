import { Provider } from "react-redux"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Contato from "../../models/Contatos"

type ContatoState = {
  contatos: Contato[]
}

 const initialState: ContatoState = {
  contatos: [
    { nome: 'João Silva', email: 'joao.silva@examplo.com', telefone: '123456789' },
    { nome: 'Maria Oliveira', email: 'maria.oliveira@examplo.com', telefone: '987654321' },
    { nome: 'José Pereira', email: 'carlos.pereira@examplo.com', telefone: '123123123' },
  ]
};

/*export const initialState: ContatoState = {
 contatos: []
}*/

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.contatos.find(
        (contatos) => contatos.nome?.toLowerCase() ===
        action.payload.nome?.toLowerCase()
      )
      if (contatoJaExiste){
        alert('Contato já está na lista')
      } else{
        state.contatos.push(action.payload)
      }
    },
    editar: (state, action: PayloadAction<{index: number, contatoEditado: Contato}>) =>{
      const {index, contatoEditado} = action.payload;
      state.contatos[index] = contatoEditado;
  },
  excluir: (state, action: PayloadAction<number>) => {
    state.contatos.splice(action.payload, 1);
  }
}

});

export const { cadastrar, editar, excluir } = contatoSlice.actions

export default contatoSlice.reducer
