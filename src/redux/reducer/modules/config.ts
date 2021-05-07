import { CHANGE_THEME, CHANGE_LOADING } from '@/redux/actions/typeKeys';

export interface DefaultState {
  name: 'light' | 'dark';
  loading: boolean;
}

const hourNow = new Date().getHours();

const defaultState: DefaultState = {
  // 18:00-07:00 dark
  name: hourNow >= 18 || hourNow <= 7 ? 'dark' : 'light',
  // 全局加载状态
  loading: true
};

const themeReducer = (state = defaultState, action: any) => {
  const stateCopy: DefaultState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case CHANGE_THEME: {
      stateCopy.name = action.name;
      return stateCopy;
    }
    case CHANGE_LOADING: {
      stateCopy.loading = action.loading;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
