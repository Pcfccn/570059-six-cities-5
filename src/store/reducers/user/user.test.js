import {ActionType, AuthorizationStatus} from "../../../constants";
import {user} from "./user";

describe(`user reducer work correctly`, () => {
  it(`Should return initial store without parametrs`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      avatarUrl: null,
      email: null,
      id: null,
      isPro: false,
      name: null,
    });
  });

  it(`should update authorizationStatus`, () => {
    expect(user(void 0, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      avatarUrl: null,
      email: null,
      id: null,
      isPro: false,
      name: null,
    });
  });

  it(`should get user data`, () => {
    expect(user(void 0, {
      type: ActionType.LOAD_USER_DATA,
      payload: {
        data: {
          id: 1,
          email: `action.payload.data.email`,
          name: `action.payload.data.name`,
          avatar_url: `action.payload.data.avatar_url`, // eslint-disable-line
          is_pro: true, // eslint-disable-line
        }
      }
    })).toEqual({
      id: 1,
      email: `action.payload.data.email`,
      name: `action.payload.data.name`,
      avatarUrl: `action.payload.data.avatar_url`,
      isPro: true,
      authorizationStatus: AuthorizationStatus.NO_AUTH
    });
  });
});
