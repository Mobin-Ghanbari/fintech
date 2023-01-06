import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Container,
  Form,
  FormGroup,
  Input
} from 'reactstrap'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useMutation,
  useQuery
} from '@apollo/client'

// const Link = new WebSocketLink({
//   uri: "ws://localhost:4000/",
//   options: {
//     reconnect: true,
//   },
// });
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})
const POST_MESSAGE = gql`
  mutation ($from: String!, $content: String!) {
    sendMessage(from: $from, message: $content) {
      id
    }
  }
`
const GET_MESSAGES = gql`
  query {
    chats {
      id
      message
      from
    }
  }
`

const Message = ({ from }) => {
  const { data } = useQuery(GET_MESSAGES, {
    pollInterval: 500
  })
  if (!data) {
    return (
      <div className='d-flex position-relative mb-3 justify-content-start custom-margin-left pb-2'>
        <span className='dot-status2 bg-status align-self-end ' />

        <img
          className='rounded-circle member-img me-3 align-self-end'
          src={require('../../img/mobin.jpg')}
        />

        <div className='bg-color-reciver text-dark p-2 rounded-3 w-50 position-relative ps-3'>
          <div className='mb-1 c-color'>mobin</div>
          Hello!. How Are you Today? Hello!. How Are you Today? Hello!. How Are
          you Today? Hello!. How Are you Today?
          <div className='font-9 mt-3 text-muted '>
            <span className='material-icons font-9 align-middle pe-1'>
              schedule
            </span>
            9:24
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {data.chats.map(({ id, from: messageUser, message }) => (
        <div
          key={id}
          className={`d-flex position-relative mb-3 ${
            from === messageUser
              ? 'justify-content-end custom-margin-right'
              : 'justify-content-start custom-margin-left'
          } pb-2`}
        >
          {from !== messageUser && (
            <>
              <span className='dot-status2 bg-status align-self-end ' />
              <img
                className='rounded-circle member-img me-3 align-self-end'
                src={require(`../../img/${messageUser}.jpg`)}
              />
            </>
          )}

          <div
            className={`font-11 lh-lg ${
              from === messageUser
                ? 'bg-color-sender text-dark'
                : 'bg-color-reciver text-dark'
            } p-2 rounded-3 w-50 position-relative ps-3`}
          >
            {from !== messageUser
              ? (
                <div className='mb-1 c-color'>{messageUser}</div>
                )
              : null}

            {message}
            <div className='font-9 mt-3 text-muted '>
              <span className='material-icons font-9 align-middle pe-1'>
                schedule
              </span>
              9:24
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const Chat = () => {
  const [message, setMessage] = useState({
    from: 'Reza Zargari',
    content: ''
  })

  const [sendMessage] = useMutation(POST_MESSAGE)

  const onSend = () => {
    if (message.content.length > 0) {
      sendMessage({
        variables: message
      })
    }
    setMessage({
      ...message,
      content: ''
    })
  }
  return (
    <Card className='border-0 shadow rounded-3 h-100'>
      <CardBody style={{ height: '200px' }} className='overflow-auto'>
        <CardTitle className='border-bottom'>
          <Form className='w-50 ms-auto '>
            <FormGroup className='position-relative custom-input'>
              <span className='material-icons position-absolute font '>
                search
              </span>
              <Input
                className=' bg-light text-muted rounded-pill border-0 form-control-sm'
                id='search'
                name='search'
                placeholder='search'
                type='text'
              />
            </FormGroup>
          </Form>
        </CardTitle>
        <CardTitle className='border-bottom mt-4 position-relative'>
          <CardSubtitle
            className='text-muted position-absolute px-4 bg-white today-middle'
            tag='h6'
          >
            Today
          </CardSubtitle>
        </CardTitle>
        <Container className='mt-4 '>
          <Message from={message.from} />
        </Container>
      </CardBody>
      <div className='border-top'>
        <Form className='p-2'>
          <FormGroup className='position-relative custom-input  d-flex'>
            <Input
              className=' bg-light text-muted rounded-pill border-0 form-control-sm py-0'
              id='send'
              value={message.content}
              name='send'
              onChange={(e) =>
                setMessage({ ...message, content: e.target.value })}
              placeholder='Enter Message'
              type='text'
            />
            <Button
              color='link'
              className='custom-btn'
              onClick={() => onSend()}
            >
              <span className='material-icons ms-5 font my-auto text-white send-icon'>
                send
              </span>
            </Button>
          </FormGroup>
        </Form>
      </div>
    </Card>
  )
}

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
)
