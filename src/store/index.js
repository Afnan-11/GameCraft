import { configureStore, createSlice } from '@reduxjs/toolkit'

const themes = {
  dark: {
    name: 'dark',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    navBg: 'bg-gray-900/80',
    cardBg: 'bg-gray-800',
    buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
    accentColor: 'text-emerald-500',
  },
  light: {
    name: 'light',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
    navBg: 'bg-white/80',
    cardBg: 'bg-gray-100',
    buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
    accentColor: 'text-emerald-600',
  },
  cyberpunk: {
    name: 'cyberpunk',
    bgColor: 'bg-purple-900',
    textColor: 'text-yellow-300',
    navBg: 'bg-purple-900/80',
    cardBg: 'bg-purple-800',
    buttonBg: 'bg-yellow-400 hover:bg-yellow-500',
    accentColor: 'text-yellow-400',
  },
  retro: {
    name: 'retro',
    bgColor: 'bg-slate-900',
    textColor: 'text-orange-400',
    navBg: 'bg-slate-900/80',
    cardBg: 'bg-slate-800',
    buttonBg: 'bg-orange-500 hover:bg-orange-600',
    accentColor: 'text-orange-500',
  },
  fantasy: {
    name: 'fantasy',
    bgColor: 'bg-emerald-900',
    textColor: 'text-amber-300',
    navBg: 'bg-emerald-900/80',
    cardBg: 'bg-emerald-800',
    buttonBg: 'bg-amber-600 hover:bg-amber-700',
    accentColor: 'text-amber-400',
  }
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: themes.dark,
  reducers: {
    setTheme: (state, action) => {
      return themes[action.payload]
    }
  }
})

export const { setTheme } = themeSlice.actions

export  const store = configureStore({
  reducer: {
    theme: themeSlice.reducer
  }
})