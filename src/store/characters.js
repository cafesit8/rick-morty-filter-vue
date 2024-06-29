import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useStore = defineStore('store', () => {
  const characters = reactive({ info: {}, users: [] })
  const visible = ref(false)
  const characterSelected = reactive({})

  function setCharacters (data) {
    characters.info = data.info
    characters.users = data.results
  }

  const setCharacterSelected = (data) => characterSelected.data = data

  const toggleMenu = () => visible.value = !visible.value

  return {
    characters,
    setCharacters,
    visible,
    toggleMenu,
    setCharacterSelected,
    characterSelected
  }
})