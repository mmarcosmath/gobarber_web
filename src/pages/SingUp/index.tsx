import React from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import { Form } from "@unform/web";
import logoImg from "../../assets/logo.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
const SingUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" type="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" type="email" placeholder="Email" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Cadastro</Button>
        </Form>
        <a href="forgot">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SingUp;
