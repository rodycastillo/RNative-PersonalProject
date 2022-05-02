export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        status: 'authenticated',
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        status: 'not-authenticated',
        token: null,
      };
    default:
      return {
        ...state,
      };
  }
};
