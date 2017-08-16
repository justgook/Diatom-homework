import * as connect from 'connect'
import * as http from 'http'
import * as serveStatic from 'serve-static'
import * as bodyParser from 'body-parser'
import { OrderProps, Status } from './Components/Order'
import fetch from 'node-fetch'

const users = [
  { u: 'boss@awesomepizza.com', p: 'qwerty123' },
  { u: 'staff@awesomepizza.com', p: 'qwerty321' },
  { u: 'dev@awesomepizza.com', p: 'qwerty111' },
]

let orders: OrderProps[] = []

const delivery = (order: OrderProps, response: http.ServerResponse) =>
  fetch(`http://courier-api.herokuapp.com/api`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify({
      api_key: '8255ffbe-6bba-11e7-907b-a6006ad3dba0', //TODO move me outside! (ENV)
      order: {
        address: order.address,
        grams: 500
      }
    })
  })
    .then(res => {
      const contentType = res.headers.get('content-type')
      if (contentType && contentType.indexOf('application/json') >= 0) {
        return res.json()
      }
      delivery(order, response)
      throw new TypeError('Oops, delivery API returned not json')
    })
    .then((res) => {
      if (res.status !== 'ok') {
        delivery(order, response)
        throw new TypeError(`Oops, delivery API returned wrong status ${res.status}`)
      }
      order.order_id = res.order_id
      order.status = Status.fulfilled
      response.end(JSON.stringify(orders))
    })

const app = connect()

app.use(bodyParser.text())

app.use((req: http.IncomingMessage & { body?: any }, res: http.ServerResponse, next: Function) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  return next()
})

app.use('/fulfil', (req: http.IncomingMessage & { body?: any }, res: http.ServerResponse, next: Function) => {
  if (req.method !== 'POST') return next()
  const { user, password } = JSON.parse(req.body)
  console.log(req.body)
  if (!users.some(v => v.u === user && v.p === password)) {
    return res.writeHead(401) || res.end('')
  }
  const { id } = JSON.parse(req.body)
  delivery(orders[id], res)
})

app.use('/getData', (req: http.IncomingMessage & { body?: any }, res: http.ServerResponse, next: Function) => {
  if (req.method !== 'POST') return next()
  const { user, password } = JSON.parse(req.body)
  if (users.some(v => v.u === user && v.p === password)) {
    return res.end(JSON.stringify(orders))
  } else res.writeHead(401) || res.end()
})

app.use('/addOrder', (req: http.IncomingMessage & { body?: any }, res: http.ServerResponse, next: Function) => {
  if (req.method !== 'POST') return next()
  orders.push({ ...JSON.parse(req.body), id: orders.length, status: Status.progress })
  res.end('OK')
})

app.use(serveStatic('dist'))

app.use('/admin', serveStatic('dist', { 'index': ['admin.html'] }))

http.createServer(app).listen(3000)
