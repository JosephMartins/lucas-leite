import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  minWidth?: string;
}

export function Button({ children, className, minWidth, ...props }: ButtonProps) {
  return ( 
    <Container className={className} minWidth={minWidth}  {...props}>
      {children}
    </Container>
  );
}
