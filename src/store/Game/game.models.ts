export type Game = {
  address: string;
  finished: boolean;
  player1: string;
  player2: string;
  winner: string;
  betAmount: string;
};

export type GameReducerState = {
  loading: boolean;
  creatingGame: boolean;
  gameAddresses: string[];
  games: Record<string, Game>;
};

export const GAME_REDUCER_INITIAL_STATE: GameReducerState = {
  loading: false,
  creatingGame: false,
  gameAddresses: [],
  games: {},
};
