import api from './api';

const server = api({ title: '@eyevinn/api-test' });

server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    throw err;
  }
  console.log(`Server listening on ${address}`);
});

export default server;
