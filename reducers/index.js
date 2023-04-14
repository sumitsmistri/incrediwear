import { createSlice, createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentSlide: 0,
  stopBgMusic: false,
  menuToggle: false,
  user: {
    name: "",
    email: "",
    workingForHealthProductRetailer: false,
  },
  painAreas: {
    head: false,
    shoulders: false,
    elbows: false,
    handswrists: false,
    knees: false,
    ankles: false,
    back: false,
    arms: false,
    hip: false,
    legs: false,
    feet: false,
  },
  bgs: [],
};

export const customReducer = createReducer(initialState, {
  toggleBgMusic: (state, action) => {
    state.stopBgMusic = action.payload;
  },
  menuToggle: (state, action) => {
    state.menuToggle = action.payload;
  },
  nextslide: (state, action) => {
    state.currentSlide += action.payload;
  },
  setUserDetails: (state, action) => {
    state.user = action.payload;
  },
  setPainAreas: (state, action) => {
    state.painAreas = action.payload;
  },
  sliderImages: (state, action) => {
    state.bgs = action.payload;
  },
});
