import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import logoImg from "../../assets/logo.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu login</h1>
        <Input name="email" type="email" placeholder="Email" icon={FiMail} />
        <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
        <Button type="submit">Entrar</Button>
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
