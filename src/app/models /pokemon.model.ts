export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    height: number;
    weight: number;
    base_experience: number;
    abilities: Array<{ability: {name: string}}>;
    types: Array<{type: {name: string}}>;
  }