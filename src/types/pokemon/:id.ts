export type PokemonType = {
  abilities: [],
  base_experience: number | undefined,
  forms: [],
  game_indices: [],
  height: number | undefined,
  held_items: [],
  id: number | undefined,
  is_default: boolean,
  location_area_encounters: string,
  moves: [],
  name: string,
  order: number | undefined,
  past_types: [],
  species: {
      name: string,
      url: string
  },
  sprites: {
    back_default: string | null,
    back_female: string | null,
    back_shiny: string | null,
    back_shiny_female: string | null,
    front_default: string | null,
    front_female: string | null,
    front_shiny: string | null,
    front_shiny_female: string | null,
    other: {
      dream_world: {
        front_default: string | null,
        front_female: string | null
      },
      home: {
        front_default: string | null,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null
      },
      "official-artwork": {
        front_default: string | null
      }
    },
    versions: {},
  }
  stats: [],
  weight: number | undefined
}

export const initialState: PokemonType = {
  abilities: [],
  base_experience: undefined,
  forms: [],
  game_indices: [],
  height: undefined,
  held_items: [],
  id: undefined,
  is_default: false,
  location_area_encounters: '',
  moves: [],
  name: '',
  order: undefined,
  past_types: [],
  species: {
    name: '',
    url: ''
  },
  sprites: {
    back_default: '',
    back_female: '',
    back_shiny: '',
    back_shiny_female: '',
    front_default: '',
    front_female: '',
    front_shiny: '',
    front_shiny_female: '',
    other: {
      dream_world: {
        front_default: '',
        front_female: ''
      },
      home: {
        front_default: '',
        front_female: '',
        front_shiny: '',
        front_shiny_female: ''
      },
      "official-artwork": {
        front_default: ''
      }
    },
    versions: {},
  },
  stats: [],
  weight: undefined
}