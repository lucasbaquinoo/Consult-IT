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
} from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";

const Home: NextPage = () => {
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
      <Row gutter={[0, 16]} style={{ marginTop: 40 }}>
        <Col span={24}>
          <Input prefix={<UserOutlined />} />
        </Col>
        <Col span={24}>
          <Input.Password prefix={<LockOutlined />} />
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
          <Button block type="primary">
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
