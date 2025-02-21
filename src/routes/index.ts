import { Router } from 'express';
import { Mario } from '../controllers/Mario';

const routes = Router();
const mario = new Mario();

routes.get('/', (req, res) => {
  res.send('Neymar no Santos');
});

routes.post('/cogumelo', (req, res) => {
  mario.pegarCogumelo();
  res.send('Mario pegou um cogumelo!');
});

routes.post('/flor', (req, res) => {
  mario.pegarFlor();
  res.send('Mario pegou uma flor!');
});

routes.post('/pena', (req, res) => {
  mario.pegarPena();
  res.send('Mario pegou uma pena!');
});

routes.post('/dano', (req, res) => {
  mario.levarDano();
  res.send('Mario levou dano!');
});

export default routes;
