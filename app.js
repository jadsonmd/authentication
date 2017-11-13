let http = require('http')

const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  res.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>')
});
 
server.listen(3000, 'localhost', () => {
 // console.log(`Servidor rodando em http://${ip}:${port}`)
 // console.log('Para derrubar o servidor: ctrl + c');
});