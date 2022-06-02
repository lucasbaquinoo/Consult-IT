import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Avatar,
  Button,
  DatePicker,
  Descriptions,
  Drawer,
  Layout,
  PageHeader,
  Radio,
  Rate,
  Result,
  Skeleton,
  Tag,
  Typography,
} from "antd";
import { User, users } from "../../data/users";
import { CreditCardOutlined } from "@ant-design/icons";

const Usuario = () => {
  const router = useRouter();
  const userId = router.query.user?.toString();

  const [user, setUser] = useState<User | undefined>(undefined);
  const [visible, setVisible] = useState(false);
  const [session, setSession] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (userId) {
      setTimeout(() => {
        const userFound = users.find((u) => u.id === Number(userId));
        if (userFound) {
          setUser(userFound);
        } else {
          setUser(undefined);
          router.back();
        }
      }, 2000);
    }
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout.Content style={{ minHeight: "100vh" }}>
      {!user ? (
        <Layout style={{ padding: "0 16px" }}>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} active />
          ))}
        </Layout>
      ) : (
        <>
          <PageHeader
            ghost={false}
            title={user.name}
            onBack={() => router.back()}
            tags={<Tag color="green">Disponível</Tag>}
            style={{ borderBottom: "1px solid #b8b8b8" }}
          >
            <Descriptions column={1}>
              <Descriptions.Item label="Especialidade">
                {user.role}
              </Descriptions.Item>
              <Descriptions.Item label="Empresa">
                {user.company}
              </Descriptions.Item>
            </Descriptions>
            <Rate value={user.rate} />
          </PageHeader>
          <Layout
            style={{
              padding: "10px 16px 50px",
            }}
          >
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "27px",
              }}
            >
              Biografia
            </Typography>
            <Typography style={{ color: "#524B6B", fontSize: "12px" }}>
              {user.bio}
            </Typography>

            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              Sessões
            </Typography>
            <Typography style={{ color: "#524B6B", fontSize: "12px" }}>
              {user.sessions} sessões
            </Typography>

            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Especialidades
            </Typography>
            <Typography>
              {user.specializations.map((specialty) => (
                <Tag key={specialty} color="blue">
                  {specialty}
                </Tag>
              ))}
            </Typography>

            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Escolha um horário:
            </Typography>
            <Radio.Group
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              buttonStyle="solid"
              onChange={(event) => setSession(event.target.value)}
              value={session}
            >
              {user.schedule.map((schedule) => (
                <Radio.Button
                  style={{ margin: "5px" }}
                  key={schedule}
                  value={schedule}
                >
                  {schedule}
                </Radio.Button>
              ))}
            </Radio.Group>
            <Button
              style={{ marginTop: "12px" }}
              type="primary"
              icon={<CreditCardOutlined />}
              onClick={showDrawer}
              disabled={session === undefined}
            >
              Agendar com 1 clique
            </Button>
          </Layout>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <Result status="success" title="Sessão agendada">
              <Button
                style={{ width: "100%" }}
                type="primary"
                onClick={onClose}
              >
                Voltar
              </Button>
            </Result>
          </Drawer>
        </>
      )}
    </Layout.Content>
  );
};

export default Usuario;
