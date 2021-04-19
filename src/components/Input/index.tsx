import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from 'react-icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => (
  <Container>
    {Icon && <Icon size={20}/>}
    <input {...props} />
  </Container>
);

export default Input;
