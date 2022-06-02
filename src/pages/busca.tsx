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
  Radio,
} from "antd";
import Meta from "antd/lib/card/Meta";
import { useRouter } from "next/router";
import { useState } from "react";
import { users } from "../data/users";

const { Option } = Select;

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

const Busca = () => {
  const router = useRouter();
  const [option, setOption] = useState<string>("");
  console.log(option);

  const handleCheckOption = (value: string) => {
    if (value === option) {
      setOption("");
    } else {
      setOption(value);
    }
  };
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
          placeholder="Selecione um profissional"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          {users.map((user) => (
            <Option key={user.id} value={user.id}>
              {user.name}
            </Option>
          ))}
        </Select>
      </Layout.Header>
      <Layout.Content
        style={{
          padding: 24,
          justifyContent: "start",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "#FCFCFC",
        }}
      >
        <Radio.Group
          onChange={(event) => handleCheckOption(event.target.value)}
          style={{ marginBottom: "12px" }}
          buttonStyle="solid"
          value={option}
        >
          <Radio.Button value="frontend">Frontend</Radio.Button>
          <Radio.Button value="design">Design</Radio.Button>
          <Radio.Button value="devops">DevOps</Radio.Button>
          <Button type="link" onClick={() => handleCheckOption(option)}>
            Limpar
          </Button>
        </Radio.Group>
        {users.map((user) => (
          <Card
            key={user.id}
            style={{ width: "100%", marginBottom: "12px" }}
            actions={[
              <Button
                type="text"
                onClick={() => router.push(`/usuario/${user.id}`)}
                key={user.id}
              >
                Detalhes
              </Button>,
            ]}
            extra={
              <Typography style={{ fontWeight: "bold" }}>
                R$ {user.price}/sessão
              </Typography>
            }
          >
            <Meta
              avatar={<Avatar src={user.avatar_url} />}
              title={
                <>
                  <Typography style={{ fontSize: 14 }}>
                    {user.name} | {user.role}
                  </Typography>
                  <Rate value={user.rate} />
                </>
              }
              description={
                <>
                  {user.tags.map((tag) => (
                    <Tag key={tag} color="blue">
                      {tag}
                    </Tag>
                  ))}
                </>
              }
            />
          </Card>
        ))}
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </>
  );
};

export default Busca;
