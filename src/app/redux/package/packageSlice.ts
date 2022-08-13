import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import config from '../../config'

const initialState: {
  packages: any[]
  myPackages: any[]
  comments: any[]
  ErrorMessage: string
  SuccessMessage: string
} = {
  packages: [],
  myPackages: [],
  comments: [],
  ErrorMessage: '',
  SuccessMessage: '',
}

export const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {
    resetMsg: (state) => {
      state.SuccessMessage = ''
      state.ErrorMessage = ''
    },
    ErrorMsg: (state, action: PayloadAction<string>) => {
      state.ErrorMessage = action.payload
      state.SuccessMessage = ''
    },
    SuccessMsg: (state, action: PayloadAction<string>) => {
      state.SuccessMessage = action.payload
      state.ErrorMessage = ''
    },
    setPackages: (state, action: PayloadAction<any[]>) => {
      state.packages = action.payload
    },
    setMyPackages: (state, action: PayloadAction<any[]>) => {
      state.myPackages = action.payload
    },
    setPackagesComments: (state, action: PayloadAction<any[]>) => {
      state.comments = action.payload
    },
  },
})

export const createPackageCommentAsync = (data: any, auth: any) => async (
  dispatch: any,
) => {
  try {
    dispatch(resetMsg())
    const response = await axios.post(`${config.API_URL}/createComment`, data, {
      headers: {
        authorization: `Bearer ${auth.accessToken}`,
      },
    })
    dispatch(SuccessMsg(response.data))
  } catch (err) {
    if (err instanceof AxiosError) {
      dispatch(ErrorMsg(err.response?.data?.message))
      throw new Error(err.message)
    }

    throw err
  }
}
export const removePackageCommentAsync = (id: any, auth: any) => async (
  dispatch: any,
) => {
  try {
    dispatch(resetMsg())
    const response = await axios.delete(`${config.API_URL}/comment/${id}`,  {
      headers: {
        authorization: `Bearer ${auth.accessToken}`,
      },
    })
    dispatch(SuccessMsg(response.data))
  } catch (err) {
    if (err instanceof AxiosError) {
      dispatch(ErrorMsg(err.response?.data?.message))
      throw new Error(err.message)
    }

    throw err
  }
}


export const listPackageCommentsAsync = (packageId: string) => async (
  dispatch: any,
) => {
  try {
    dispatch(resetMsg())
    const response = await axios.get(
      [`${config.API_URL}/package/`, packageId, '/comments'].join(''),
    )
    dispatch(setPackagesComments(response.data))
  } catch (err) {
    if (err instanceof AxiosError) {
      dispatch(ErrorMsg(err.response?.data?.message))
      throw new Error(err.message)
    }
    throw err
  }
}

export const createPackageAsync = (data: any, auth: any) => async (
  dispatch: any,
) => {
  try {
    dispatch(resetMsg())
    const response = await axios.post(
      `${config.API_URL}/createpackByUser`,
      data,
      {
        headers: {
          authorization: `Bearer ${auth.accessToken}`,
        },
      },
    )
    dispatch(SuccessMsg(response.data))
  } catch (err) {
    if (err instanceof AxiosError) {
      dispatch(ErrorMsg(err.response?.data?.message))
      throw new Error(err.message)
    }

    throw err
  }
}
export const updatePackageAsync = (id: string, data: any, auth: any) => async (
  dispatch: any,
) => {
  try {
    dispatch(resetMsg())
    const response = await axios.patch(
      `${config.API_URL}/package/${id}`,
      data,
      {
        headers: {
          authorization: `Bearer ${auth.accessToken}`,
        },
      },
    )
    dispatch(SuccessMsg(response.data))
  } catch (err) {
    if (err instanceof AxiosError) {
      dispatch(ErrorMsg(err.response?.data?.message))
      throw new Error(err.message)
    }

    throw err
  }
}

export const listPackageAsync = (q?: string | null) => async (
  dispatch: any,
) => {
  try {
    dispatch(resetMsg())
    const response = await axios.get(
      [`${config.API_URL}/Package`, q ? `?name=${q}` : ''].join(''),
    )
    dispatch(setPackages(response.data))
  } catch (err) {
    if (err instanceof AxiosError) {
      dispatch(ErrorMsg(err.response?.data?.message))
      throw new Error(err.message)
    }
    throw err
  }
}
export const listMyPackageAsync = (user_id: string) => async (
  dispatch: any,
) => {
  try {
    dispatch(resetMsg())
    const response = await axios.get(
      `${config.API_URL}/package/details/` + user_id,
    )
    dispatch(setMyPackages(response.data))
  } catch (err) {
    if (err instanceof AxiosError) {
      dispatch(ErrorMsg(err.response?.data?.message))
      throw new Error(err.message)
    }
    throw err
  }
}

export const {
  ErrorMsg,
  SuccessMsg,
  resetMsg,
  setMyPackages,
  setPackages,
  setPackagesComments,
} = packageSlice.actions

export default packageSlice.reducer
