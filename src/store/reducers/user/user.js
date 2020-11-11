import {AuthorizationStatus, ActionType} from "../../../constants";
import {extend} from "../../../utils/common";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.LOAD_USER_DATA:
      return extend(state, {
        id: action.payload.data.id,
        email: action.payload.data.email,
        name: action.payload.data.name,
        avatarUrl: action.payload.data.avatar_url,
        isPro: action.payload.data.is_pro,
      });
  }

  return state;
};

export {user};
