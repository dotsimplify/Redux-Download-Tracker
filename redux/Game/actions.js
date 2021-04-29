import { GAME_DOWNLAOD, CANCEL_DOWNLOAD } from "./types";
// Creating Actions for both types
export const gameDownload = () => {
  return { type: GAME_DOWNLAOD };
};

export const cancelDownload = () => {
  return { type: CANCEL_DOWNLOAD };
};
