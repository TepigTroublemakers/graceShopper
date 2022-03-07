import axios from 'axios';

// Set action types
const SET_ALL_POTS = 'SET_ALL_POTS';
const DELETE_POT = 'DELETE_POT';
const UPDATE_POT = 'UPDATE_POT';
const ADD_SINGLE_POT = 'ADD_SINGLE_POT';

// Action creators
const setAllPots = (pots) => {
  return {
    type: SET_ALL_POTS,
    pots,
  };
};

const _deletePot = (pot) => {
  return {
    type: DELETE_POT,
    pot,
  };
};

const _updatePot = (pot) => {
  return {
    type: UPDATE_POT,
    pot,
  };
};

const _addSinglePot = (pot) => {
  return {
    type: ADD_SINGLE_POT,
    pot,
  };
};

// Thunk creators
export const getAllPots = (location) => {
  return async (dispatch) => {
    try {
      const { data: allPots } = await axios.get(`/api/pots${location.search}`);
      dispatch(setAllPots(allPots));
    } catch (error) {
      console.error('Error in getAllPots thunk!!');
    }
  };
};

export const deletePot = (id) => {
  return async (dispatch) => {
    try {
      const { data: pot } = await axios.delete(`/api/pots/${id}`);
      dispatch(_deletePot(pot));
    } catch (error) {
      console.error('Error in deletePot thunk!!!');
    }
  };
};

export const updatePot = (pot) => {
  return async (dispatch) => {
    try {
      const { data: updatedPot } = await axios.put(`/api/pots/${pot.id}`, pot);
      dispatch(_updatePot(updatedPot));
    } catch (error) {
      console.error('Error in updatePot thunk!');
    }
  };
};

export const addSinglePot = (pot) => {
  return async (dispatch) => {
    try {
      const { data: createdPot } = await axios.post('/api/pots', pot);
      dispatch(_addSinglePot(createdPot));
    } catch (error) {
      console.error('Error in addSinglePot thunk!!');
    }
  };
};

// Initial state
const initState = [];

// Reducer
const pots = (state = initState, action) => {
  switch (action.type) {
    case SET_ALL_POTS: {
      return action.pots;
    }
    case DELETE_POT: {
      return state.filter((pot) => pot.id !== action.pot.id);
    }
    case UPDATE_POT: {
      return state.map((pot) => (pot.id === action.pot.id ? action.pot : pot));
    }
    case ADD_SINGLE_POT: {
      return [...state, action.pot];
    }
    default:
      return state;
  }
};

export default pots;
