import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Typography,
  Select,
  Card,
  Avatar,
  Rate,
  Tag,
  Button,
} from "antd";
import Meta from "antd/lib/card/Meta";
import { useRouter } from "next/router";

const { Option } = Select;

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

const Busca = () => {
  const router = useRouter();
  return (
    <>
      <Layout.Header
        style={{
          height: "220px",
          background: "url(/cover.jpg)",
        }}
      >
        <img src="/logo.png" alt="Logo" />

        <Typography
          style={{
            fontSize: "20px",
            color: "#fff",
          }}
        >
          Buscar profissionais
        </Typography>
        <Select
          style={{ width: "100%" }}
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Layout.Header>
      <Layout.Content
        style={{
          padding: 24,
          justifyContent: "start",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          background: "#FCFCFC",
        }}
      >
        {[1, 2, 3].map((item) => (
          <Card
            key={item}
            style={{ width: "100%" }}
            actions={[
              <Button
                type="text"
                onClick={() => router.push("/usuario/antonio")}
                key={item}
              >
                Detalhes
              </Button>,
            ]}
            extra={
              <Typography style={{ fontWeight: "bold" }}>R$ 120,00</Typography>
            }
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <>
                  <Typography style={{ fontSize: 14 }}>
                    Luigi | UX/UI Design
                  </Typography>
                  <Rate value={4.5} />
                </>
              }
              description={
                <>
                  <Tag>DesignOps</Tag>
                  <Tag>Direcionamento</Tag>
                </>
              }
            />
          </Card>
        ))}
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </>
  );
};

export default Busca;
