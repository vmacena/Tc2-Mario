import { IMarioState } from "./IMarioState";
import { MarioGrande } from "./MarioGrande";

export class MarioPequeno implements IMarioState {
  pegarCogumelo(): IMarioState {
    console.log("Mario se transformou em Mario Grande!");
    return new MarioGrande();
  }

  pegarFlor(): IMarioState {
    console.log("Mario se transformou em Mario Grande com Fogo!");
    return new MarioGrande().pegarFlor();
  }

  pegarPena(): IMarioState {
    console.log("Mario se transformou em Mario Grande com Capa!");
    return new MarioGrande().pegarPena();
  }

  levarDano(): IMarioState {
    console.log("Mario perdeu uma vida! Está fora do jogo.");
    return this; // Mario já está no estado mais fraco
  }
}
