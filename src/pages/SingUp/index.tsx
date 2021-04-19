import React from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import logoImg from "../../assets/logo.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
const SingUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input type="name" placeholder="Nome" icon={FiUser} />
        <Input type="email" placeholder="Email" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />
        <Button type="submit">Cadastro</Button>
      </form>
      <a href="forgot">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SingUp;
