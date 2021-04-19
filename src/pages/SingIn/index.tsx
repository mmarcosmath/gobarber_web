import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import logoImg from "../../assets/logo.svg";
const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu login</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="forgot">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SingIn;