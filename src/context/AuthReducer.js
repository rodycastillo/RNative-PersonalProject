export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        state: true,
        user: action.payload.user,
        message: 'authenticated',
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        state: false,
        user: null,
        message: 'not-authenticated',
        token: null,
      };
    default:
      return state;
  }
};
