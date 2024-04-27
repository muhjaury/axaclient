export const userDataStore = (payload) => ({
  type: "LOGIN",
  payload,
});

export const posts = (payload) => ({
  type: "POST",
  payload,
});

export const albums = (payload) => ({
  type: "ALBUMS",
  payload,
});

export const deleteUserDataStore = (payload) => ({
  type: "LOGOUT",
  payload,
});
