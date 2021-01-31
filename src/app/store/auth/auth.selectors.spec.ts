import { VerifiedUser } from "src/app/shared/models/user.model";
import { AppState } from "../global/app.reducer";
import { getAuthStateLoading, getCurrentUser, getTopNavUserLogo } from "./auth.selectors";

describe("Auth Selectors test", () => {
  const fakeUser = new VerifiedUser(111, "FakeUser", "fake@email.com", false, false, null, null,
    undefined, null, null, null, null, []);

  const initialState: AppState = {
    auth: {
      currentUser: fakeUser,
      loading: true
    }
  };

  it("should select loading state", () => {
    expect(getAuthStateLoading(initialState)).toBe(true);
  });

  it("should select the user state", () => {
    expect(getCurrentUser(initialState)?.displayName).toBe('FakeUser');
  });

  it("should select loading using projector", () => {
    const result = getAuthStateLoading.projector(initialState.auth);
    expect(result).toEqual(true);
  });

  it("should select user using projector", () => {
    const result = getCurrentUser.projector(initialState.auth);
    expect(result).toBeTruthy();
  });

  it("should select user be defined using projector", () => {
    const result = getCurrentUser.projector(initialState.auth);
    expect(result).toBeDefined();
  });

  it("should select user and verify user name using projector", () => {
    const result = getCurrentUser.projector(initialState.auth);
    expect(result?.displayName).toBe('FakeUser');
  });

  it("should return user img logo using projector", () => {
    const result = getTopNavUserLogo.projector(initialState.auth);
    expect(result).toBe('assets/user/loggedin.png');
  });

  // it("should select the book collection", () => {
  //   const result = selectBookCollection.projector(
  //     initialState.books,
  //     initialState.collection
  //   );
  //   expect(result.length).toEqual(1);
  //   expect(result[0].id).toEqual("firstId");
  // });

});
