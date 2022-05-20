import { createSlice,PayloadAction } from "@reduxjs/toolkit"

export interface UserState {
  userName:string
}

const initialState:UserState = {
  userName:'ningHao'
}

const userSlice = createSlice({
  // 命名空间,值会作为 action type 的前缀
  name:'user',
  initialState,
  reducers:{
    incrrment:(state:UserState) => {
      state.userName = 'nameY'
    },
    incrementByAmount:(state:UserState,action:PayloadAction<string>) => {
      state.userName = action.payload
    }
  }
})

export const { incrrment,incrementByAmount } = userSlice.actions

export default userSlice.reducer