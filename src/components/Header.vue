<template>
  <header class="max-w-6xl m-auto mt-6 flex flex-col gap-5 mb-3 bg-[#1d1d20] p-4 rounded-md">
    <h1 class="md:text-3xl text-xl font-bold">Rick and Morty</h1>
    <form @submit.prevent="handleSubmit" class="flex md:flex-row flex-col gap-3">
      <InputText @click="toggle" autocomplete="off" aria-placeholder="Search" placeholder="Busca tu personaje" v-model="characterName" class="md:w-[50%] w-full"
        id="character" />
      <button :disabled="!characterName" class="bg-[#3d3d3d] md:py-2 py-1 px-5 rounded disabled:opacity-60">Buscar</button>
    </form>
  </header>
  <Popover ref="pop">
    <div class="w-[500px] flex flex-col gap-4">
      <h6>Filtrar por Especies</h6>
      <div class="grid [grid-template-columns:repeat(auto-fit,_minmax(150px,1fr))] gap-3">
        <button v-for="item in species" :key="item.id" @click="handleClick(item)"
          class="bg-[#333333] rounded-md shadow p-2 flex justify-center items-center hover:bg-[#3d3d3d] hover:scale-105 duration-150">
          <p class="text-center text-sm">{{ item }}</p>
        </button>
      </div>
    </div>
  </Popover>
</template>

<script>
import Popover from 'primevue/popover'
import InputText from 'primevue/inputtext'
import { reactive, ref, watch } from 'vue';
import { getBySpecies, getCharacteryByName, getUsers } from '../services';
import { useStore } from '../store/characters'

export default {
  name: 'Header',
  components: {
    InputText,
    Popover
  },
  setup () {
    const { setCharacters } = useStore()
    const characterName = ref('')
    const location = reactive([])
    const species = reactive(['Human', 'Alien', 'Humanoid', 'Robot', 'Cronenberg', 'Mythological Creature', 'Animal', 'Disease', 'Unknown'])

    async function handleSubmit () {
      try {
        const response = await getCharacteryByName(characterName.value)
        setCharacters(response)
      } catch (error) {
        console.log(error)
      }
    }

    async function handleClick (specie) {
      try {
        const response = await getBySpecies(specie)
        setCharacters(response)
      } catch (error) {
        console.log(error)
      }
    }

    watch(characterName, async () => {
      if (characterName.value === '') {
        const data = await getUsers()
        setCharacters(data)
      }
    })

    return {
      location,
      handleSubmit,
      characterName,
      species,
      handleClick
    }
  },
  methods: {
    toggle (e) {
      this.$refs.pop.toggle(e)
    }
  }
}
</script>