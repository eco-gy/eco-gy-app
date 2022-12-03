import { SB_DOMAIN } from "../config/constants";

export const getUserFromStorage = () => {
    // get the user from the localStorage
    const authLocalStorage = window.localStorage.getItem(
      `sb-${SB_DOMAIN}-auth-token`
    );
    if (authLocalStorage) {
      const {id, email} = JSON.parse(authLocalStorage).user
      return {id, email};
    }
    return null;
}
