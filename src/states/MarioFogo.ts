import { IMarioState } from "./IMarioState";
import { MarioPequeno } from "./MarioPequeno";
import { MarioCapa } from "./MarioCapa";

export class MarioFogo implements IMarioState {
  pegarCogumelo(): IMarioState {
    console.log("Mario ganhou 80 pontos!");
    return this;
  }

  pegarFlor(): IMarioState {
    console.log("Mario já tem Fogo! Ganhou 100 pontos.");
    return this;
  }

  pegarPena(): IMarioState {
    console.log("Mario ganhou uma Capa!");
    return new MarioCapa();
  }

  levarDano(): IMarioState {
    console.log("Mario voltou a ser Pequeno.");
    return new MarioPequeno();
  }
}
