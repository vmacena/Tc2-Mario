import { IMarioState } from "./IMarioState";
import { MarioPequeno } from "./MarioPequeno";
import { MarioFogo } from "./MarioFogo";
import { MarioCapa } from "./MarioCapa";

export class MarioGrande implements IMarioState {
  pegarCogumelo(): IMarioState {
    console.log("Mario ganhou 50 pontos!");
    return this;
  }

  pegarFlor(): IMarioState {
    console.log("Mario ganhou poder de Fogo!");
    return new MarioFogo();
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
