import * as fromAuthReducer from './auth.reducer';
import * as fromAuthActions from './auth.actions';

describe('AuthReducer test', () => {

  describe('unknown action will not cause state change', () => {

    it('should return the default state', () => {
      const { inititalState } = fromAuthReducer;
      const action = {
        type: 'Unknown action',
      };
      const state = fromAuthReducer.authStateReducer(inititalState, action);

      expect(state).toBe(inititalState);
    });
  });

  describe('testing actions that will modify states', () => {

    it('state change for user login start', () => {
      const { inititalState } = fromAuthReducer;
      const action = fromAuthActions.userLoginStart({ name: "Kevin", password: "password" });

      const expectedState = {
        ...inititalState,
        loginUserName: "Kevin",
        authLoading: true
      }
      const state = fromAuthReducer.authStateReducer(inititalState, action);

      expect(state).toEqual(expectedState);
    });
  });

});
