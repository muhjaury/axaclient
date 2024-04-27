const initUserData = {
  userData: {},
  key: "",
  isLogin: false,
};

const initPosts = {
  userId: "",
  posts: [],
};

const initAlbums = {
  userId: "",
  albums: [],
};

export const userDataReducer = (state = initUserData, action) => {
  const data = action.payload;
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userData: data.userData,
        key: data.key,
        isLogin: data.isLogin,
      };
    case "LOGOUT":
      return {
        userData: "",
        key: "",
        isLogin: false,
      };
    default:
      return state;
  }
};

export const postsReducer = (state = initPosts, action) => {
  const data = action.payload;
  switch (action.type) {
    case "POST":
      return {
        ...state,
        userId: data.userId,
        posts: data.posts,
      };
    case "LOGOUT":
      return {
        userId: "",
        posts: [],
      };
    default:
      return state;
  }
};

export const albumsReducer = (state = initAlbums, action) => {
  const data = action.payload;
  switch (action.type) {
    case "ALBUMS":
      return {
        ...state,
        userId: data.userId,
        albums: data.albums,
      };
    case "LOGOUT":
      return {
        userId: "",
        albums: [],
      };
    default:
      return state;
  }
};
