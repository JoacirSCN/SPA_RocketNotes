import { Container, Form, Avatar } from "./styles";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleBack(){
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar >
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        
        <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)} />

        <Input placeholder="Email" type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)} />

        <Input placeholder="Senha atual" type="password" icon={FiLock} value={passwordOld} onChange={e => setPasswordOld(e.target.value)} />

        <Input placeholder="Senha nova" type="password" icon={FiLock} value={passwordNew} onChange={e => setPasswordNew(e.target.value)} />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
