import { IMarioState } from "./IMarioState";
import { MarioPequeno } from "./MarioPequeno";
import { MarioFogo } from "./MarioFogo";

export class MarioCapa implements IMarioState {
  pegarCogumelo(): IMarioState {
    console.log("Mario ganhou 100 pontos!");
    return this;
  }

  pegarFlor(): IMarioState {
    console.log("Mario agora tem Fogo!");
    return new MarioFogo();
  }

  pegarPena(): IMarioState {
    console.log("Mario já tem uma Capa! Ganhou 100 pontos.");
    return this;
  }

  levarDano(): IMarioState {
    console.log("Mario voltou a ser Pequeno.");
    return new MarioPequeno();
  }
}
