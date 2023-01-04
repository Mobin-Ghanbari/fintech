import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Container,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useSubscription,
  useQuery,
  useMutation,
} from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";

const Link = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true,
  },
});
const client = new ApolloClient({
  Link,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
const POST_MESSAGE = gql`
  mutation ($from: String!, $content: String!) {
    sendMessage(from: $from, message: $content) {
      id
    }
  }
`;
const GET_MESSAGES = gql`
  subscription {
    chats {
      id
      message
      from
    }
  }
`;

const Message = ({ from }) => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }

  return (
    <>
      {data.chats.map(({ id, from: messageUser, message }) => (
        <div
          className={`d-flex ${
            from === messageUser
              ? "justify-content-end"
              : "justify-content-start"
          } pb-2`}
        >
          {from !== messageUser && (
            <img
              className="rounded-circle spa-member me-3"
              src={require(`../../img/${messageUser}.jpg`)}
            />
          )}

          <div
            className={` ${
              from === messageUser
                ? "bg-color-sender text-dark"
                : "bg-color-reciver text-dark"
            } p-2 rounded-3 w-50 position-relative`}
          >
            {from !== messageUser ? (
              <div className="mb-1 c-color">{messageUser}</div>
            ) : null}

            {message}
          </div>
        </div>
      ))}
    </>
  );
};

const Chat = () => {
  const [message, setMessage] = useState({
    from: "Reza Zargari",
    content: "",
  });

  const [sendMessage] = useMutation(POST_MESSAGE);

  const onSend = () => {
    if (message.content.length > 0) {
      sendMessage({
        variables: message,
      });
    }
    setMessage({
      ...message,
      content: "",
    });
  };
  return (
    <Card className="border-0 shadow rounded-3 h-100">
      <CardBody style={{ height: "200px" }} className="overflow-auto">
        <CardTitle className="border-bottom">
          <Form className="w-50 ms-auto ">
            <FormGroup className="position-relative custom-input">
              <span className="material-icons position-absolute font ">
                search
              </span>
              <Input
                className=" bg-light text-muted rounded-pill border-0 form-control-sm"
                id="search"
                name="search"
                placeholder="search"
                type="text"
              />
            </FormGroup>
          </Form>
        </CardTitle>
        <CardTitle className="border-bottom mt-4 position-relative">
          <CardSubtitle
            className="text-muted position-absolute px-4 bg-white today-middle"
            tag="h6"
          >
            Today
          </CardSubtitle>
        </CardTitle>
        <Container className="mt-4 ">
          <Message from={message.from} />
        </Container>
      </CardBody>
      <div className="border-top">
        <Form className="p-2">
          <FormGroup className="position-relative custom-input  d-flex">
            <Input
              className=" bg-light text-muted rounded-pill border-0 form-control-sm py-0"
              id="search"
              value={message.content}
              name="search"
              onChange={(e) =>
                setMessage({ ...message, content: e.target.value })
              }
              placeholder="Enter Message"
              type="text"
            />
            <Button color="link" onClick={() => onSend()}>
              <span className="material-icons ms-5 font my-auto text-white send-icon">
                send
              </span>
            </Button>
          </FormGroup>
        </Form>
      </div>
    </Card>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
