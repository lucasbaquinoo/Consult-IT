import { useRouter } from "next/router";
import {
  Avatar,
  DatePicker,
  Descriptions,
  Layout,
  PageHeader,
  Radio,
  Rate,
  Tag,
  Typography,
} from "antd";

const upperFirstLetter = (value?: string) => {
  if (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return value;
};

const Usuario = () => {
  const router = useRouter();
  const username = router.query.user?.toString();
  return (
    <Layout.Content>
      <PageHeader
        ghost={false}
        title={upperFirstLetter(username)}
        onBack={() => router.back()}
        tags={<Tag color="green">Disponível</Tag>}
        style={{ borderBottom: "1px solid #b8b8b8" }}
      >
        <Descriptions column={2}>
          <Descriptions.Item label="Especialidade">cargo</Descriptions.Item>
          <Descriptions.Item label="Empresa">empresa</Descriptions.Item>
        </Descriptions>
        <Rate value={4} />
      </PageHeader>
      <Layout
        style={{
          padding: "10px 16px 50px",
        }}
      >
        <Typography
          style={{ fontSize: "14px", fontWeight: "bold", marginTop: "27px" }}
        >
          Biografia
        </Typography>
        <Typography style={{ color: "#524B6B", fontSize: "12px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          deserunt distinctio earum expedita sint, possimus repellat nam. Vitae
          cum incidunt blanditiis rerum quidem deleniti iste laborum porro
          atque, consequatur cumque?
        </Typography>

        <Typography
          style={{ fontSize: "14px", fontWeight: "bold", marginTop: "30px" }}
        >
          Sessões
        </Typography>
        <Typography style={{ color: "#524B6B", fontSize: "12px" }}>
          17890 sessões
        </Typography>

        <Typography
          style={{ fontSize: "14px", fontWeight: "bold", marginTop: "20px" }}
        >
          Especialidades
        </Typography>
        <Typography>
          <Tag>DesignOps</Tag> <Tag>Direcionamento</Tag> <Tag>Coach</Tag>{" "}
          <Tag>System Design</Tag>
        </Typography>

        <Typography
          style={{ fontSize: "14px", fontWeight: "bold", marginTop: "20px" }}
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
        >
          <Radio.Button style={{ margin: "5px" }} value="a">
            30 Jun 2022, 08h00
          </Radio.Button>
          <Radio.Button style={{ margin: "5px" }} value="b">
            30 Jun 2022, 09h00
          </Radio.Button>
          <Radio.Button style={{ margin: "5px" }} value="c">
            30 Jun 2022, 10h00
          </Radio.Button>
          <Radio.Button style={{ margin: "5px" }} value="d">
            10 Jul 2022, 08h00
          </Radio.Button>
          <Radio.Button style={{ margin: "5px" }} value="e">
            12 Jul 2022, 08h00
          </Radio.Button>
          <Radio.Button style={{ margin: "5px" }} value="f">
            15 Jul 2022, 08h00
          </Radio.Button>
          <Radio.Button style={{ margin: "5px" }} value="g">
            30 Jul 2022, 08h00
          </Radio.Button>
          <Radio.Button style={{ margin: "5px" }} value="h">
            31 Jul 2022, 08h00
          </Radio.Button>
        </Radio.Group>
      </Layout>
    </Layout.Content>
  );
};

export default Usuario;
