import type { NextPage } from "next";
import {
  Input,
  Checkbox,
  Typography,
  Button,
  Row,
  Layout,
  Space,
  Col,
  Alert,
} from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowError(false);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowError(false);
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (email === "usuario@consultit.com" && password === "123456") {
      router.push("/busca");
    } else {
      setShowError(true);
    }
  };
  return (
    <Layout.Content
      style={{
        padding: 24,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#FCFCFC",
      }}
    >
      <Row justify="center">
        <Typography.Title level={2}>Bem vindo de volta</Typography.Title>
        <Typography style={{ textAlign: "center" }}>
          Entre na sua conta e encontre os melhores profissionais para o próximo
          nível
        </Typography>
      </Row>
      {showError && <Alert message="E-mail ou senha incorretos" type="error" />}
      <Row gutter={[0, 16]} style={{ marginTop: 40 }}>
        <Col span={24}>
          <Input
            status={showError ? "error" : ""}
            value={email}
            onChange={handleEmailChange}
            prefix={<UserOutlined />}
          />
        </Col>
        <Col span={24}>
          <Input.Password
            status={showError ? "error" : ""}
            value={password}
            onChange={handlePasswordChange}
            prefix={<LockOutlined />}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }} wrap={false} justify="space-between">
        <Checkbox>Manter-me conectado</Checkbox>
        <Button size="small" type="link">
          Esqueceu a senha ?
        </Button>
      </Row>

      <Row gutter={[0, 16]} style={{ marginTop: 40 }}>
        <Col span={24}>
          <Button block type="primary" onClick={handleSubmit}>
            Entrar
          </Button>
        </Col>
        <Col span={24}>
          <Button block icon={<GoogleOutlined />}>
            {" "}
            Entrar com Google
          </Button>
        </Col>
      </Row>
      <Typography style={{ marginTop: 24, textAlign: "center" }}>
        Ainda não possui uma conta? <Button type="link">Cadastrar</Button>
      </Typography>
    </Layout.Content>
  );
};

export default Home;
