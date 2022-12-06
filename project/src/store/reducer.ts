import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, setOffers, setSortType, setOffersLoaded} from './action';
import {Offer} from '../types/offers-type';
import {DEFAULT_CITY, DEFAULT_SORT_OFFERS_TYPE} from '../constants';

type InitialState = {
  currentCity: string;
  offers: Offer[];
  sortOffersType: string;
  isOffersLoaded: boolean;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers : [],
  sortOffersType: DEFAULT_SORT_OFFERS_TYPE,
  isOffersLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setSortType, (state, action) => {
      state.sortOffersType = action.payload.type;
    })
    .addCase(setOffersLoaded, (state, action) => {
      state.isOffersLoaded = action.payload.status;
    });
});
