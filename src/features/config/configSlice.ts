import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  },
});

export const { setColor, addImage, removeImage } = configSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getColor = (state: RootState) => state.config.colors;
export const getImages = (state: RootState) => state.config.images;

export default configSlice.reducer;
