export interface Pokemon {
  id: string;
  name: string;
  weight: string;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  order: number;
}
