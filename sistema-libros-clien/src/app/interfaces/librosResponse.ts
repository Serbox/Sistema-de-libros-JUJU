import { Libro } from "./libros";

export interface LibrosResponse {
  libros: Libro[];
  total: number;
}