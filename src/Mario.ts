import { IMarioState } from "./states/IMarioState";
import { MarioPequeno } from "./states/MarioPequeno";

export class Mario {
  private estado: IMarioState;

  constructor() {
    this.estado = new MarioPequeno();
  }

  mudarEstado(estado: IMarioState) {
    this.estado = estado;
  }

  pegarCogumelo() {
    this.estado = this.estado.pegarCogumelo();
  }

  pegarFlor() {
    this.estado = this.estado.pegarFlor();
  }

  pegarPena() {
    this.estado = this.estado.pegarPena();
  }

  levarDano() {
    this.estado = this.estado.levarDano();
  }
}
