import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Image {
  path: string,
  name: string,
}

export interface ConfigState {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    tintColor: string;
    shadeColor: string;
    toneColor: string;
  },
  images: Image[],
  targetComponent: Record<string, string>,
  activeElementId: string,
}

const initialState: ConfigState = {
  colors: {
    primaryColor: "00FF00",
    secondaryColor: "FFF",
    tertiaryColor: "000",
    tintColor: "000",
    shadeColor: "000",
    toneColor: "000",
  },
  images: [],
  targetComponent: {},
  activeElementId: "",
};

export const configSlice = createSlice({
  name: 'colors',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setColor: (state, action: PayloadAction<{type: "primaryColor"|"secondaryColor"|"tertiaryColor"|"tintColor"|"shadeColor"|"toneColor", color: string}>) => {
      state.colors[action.payload.type] = action.payload.color;
    },
    addImage: (state, action: PayloadAction<Image>) => {
      state.images.push(action.payload);
    },
    removeImage: (state, action: PayloadAction<number>) => {
      state.images.splice(action.payload,1);
    },
    setTargetComponent: (state, action: PayloadAction<any>) => {
      state.targetComponent = action.payload;
    },
    setActiveElementId: (state, action: PayloadAction<string>) => {
      state.activeElementId = action.payload;
    },
    updateTargetComponent: (state, action: PayloadAction<{ key: string, value: string }>) => {
      state.targetComponent[action.payload.key] = action.payload.value;
    },
  },
});

export const { setColor, addImage, removeImage, setTargetComponent, updateTargetComponent, setActiveElementId } = configSlice.actions;

const store = configureStore({
  reducer: configSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getColor = (state: RootState) => state.config.colors;
export const getImages = (state: RootState) => state.config.images;
export const getTargetComponent = (state: RootState) => state.config.targetComponent;
export const getActiveElementId = (state: RootState) => state.config.activeElementId;

export default configSlice.reducer;
