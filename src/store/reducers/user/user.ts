import {TAction} from "../../../components/types/action";
import {AuthorizationStatus, ActionType} from "../../../constants";
import {extend} from "../../../utils/common";

type TUser = {
  authorizationStatus: string
  id: number | null
  email: string | null,
  name: string | null,
  avatarUrl: string | null,
  isPro: boolean,
}

const initialState: TUser = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  id: null,
  email: null,
  name: null,
  avatarUrl: null,
  isPro: false,
};

const user = (state: TUser = initialState, action: TAction) => {
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

export {user, TUser};
