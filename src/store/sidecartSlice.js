import { createSlice } from '@reduxjs/toolkit';


const sidecartSlice = createSlice({
  name: 'sidecart',
  initialState: { sidecartstate: false},
  reducers: {

    opensidecart: (state ) => {
      state.sidecartstate = true;
    },
    closesidecart: (state ) => {
      state.sidecartstate = false;
    },
    
  },
});

export const  {opensidenav,closesidenav}  = sidecartSlice.actions
export default sidecartSlice.reducer;

