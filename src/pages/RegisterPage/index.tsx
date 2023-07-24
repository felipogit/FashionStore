import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgCover from '../../assets/Rectangle 2.png';
import { Input } from '../../components/Input';
import { ButtonStyled } from "../../styles/Button";
import { HeaderDefault } from '../../components/Header/index.tsx';
import { FooterDefault } from "../../components/Footer";
import { letterTitle1 } from "../../styles/globalStyle.ts";
import { RegisterContainer, RegisterContent, ImageContainer, FormContainer, StyledForm } from './style';



const cadastrarUsuario = async (nome: string, email: string, senha: string) => {
  try {
    const response = await fetch('https://fashion-store-api.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nome, email, password: senha }),
    });

    if (response.ok) {
      console.log('Usuário cadastrado com sucesso.');
    } else {
      const responseData = await response.json();
      console.error('Erro ao cadastrar usuário:', responseData);
    }
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
  }
};

export const RegisterPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = async (event: React.FormEvent) => {
    event.preventDefault();

    if (senha !== confirmacaoSenha) {
      setMensagem('A senha não coincide com a confirmação de senha.');
      return;
    }

    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
    if (!senhaRegex.test(senha)) {
      setMensagem(
        'A senha não atende aos requisitos. Ela deve conter pelo menos uma letra maiúscula, uma letra minúscula, um caractere especial, um número e ter no mínimo 8 caracteres.'
      );
      return;
    }

    await cadastrarUsuario(nome, email, senha);

    setMensagem('Cadastro realizado com sucesso.');
  };
  return (
    <>
      <HeaderDefault onlyBrand={true} />
  
    <main>  <RegisterContainer>
        <ImageContainer>
          <img src={imgCover} alt="Imagem de capa" />
        </ImageContainer>
        <RegisterContent>
  
          <FormContainer>

            <StyledForm onSubmit={handleCadastro}>
            <Link to="/">Voltar</Link>

<h1>CADASTRAR-SE</h1>
  <h5>Seja bem-vindo administrador!</h5>
            <div className="form-group">
              <label htmlFor="nome"></label>
              <Input
                id="nome"
                type="text"
                placeholder="NOME"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <Input
                id="email"
                type="email"
                placeholder="E-MAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="SENHA"></label>
              <Input
                id="senha"
                type="password"
                placeholder="SENHA"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmacaoSenha"></label>
              <Input
                id="confirmacaoSenha"
                type="password"
                placeholder="CONFIRMAR SENHA"
                value={confirmacaoSenha}
                onChange={(e) => setConfirmacaoSenha(e.target.value)}
              />
            </div>
            <ButtonStyled styleTypeButton="black">CADASTRAR-SE</ButtonStyled>
            </StyledForm>
          {mensagem && <p>{mensagem}</p>}
        </FormContainer>
      </RegisterContent>
    </RegisterContainer>

    </main>

    <FooterDefault />
  </>
);}