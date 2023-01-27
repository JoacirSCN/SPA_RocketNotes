import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="profile">
        <img 
          src="https://github.com/JoacirSCN.png" 
          alt="Foto do Usuário" 
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Joacir Sampaio</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine></RiShutDownLine>
      </Logout>
      
    </Container>
  )
}