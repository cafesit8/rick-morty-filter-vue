<template>
  <main class="max-w-6xl m-auto grid md:[grid-template-columns:repeat(auto-fit,_minmax(250px,1fr))] [grid-template-columns:repeat(auto-fit,_minmax(130px,1fr))] gap-3">
    <article 
      v-for="user in characters.users" 
      :key="user.id" 
      class="max-w-sm bg-[#3d3d3d] rounded-lg shadow cursor-pointer"
      :title="user.name"
      @click="handleClick(user)"
    >
      <picture>
        <img class="rounded-t-lg w-full" :src="user.image" alt="" />
      </picture>
      <div class="p-3">
        <h5 class="mb-2 md:text-2xl text-lg font-bold truncate tracking-tight text-gray-900 dark:text-white">{{ user.name }}</h5>
        <ul>
          <li class="md:text-base text-sm"><span class="font-semibold md:text-base text-sm">Status:</span> {{ user.status }}</li>
          <li class="md:text-base text-sm"><span class="font-semibold md:text-base text-sm">Specie:</span> {{ user.species }}</li>
          <li class="md:text-base text-sm"><span class="font-semibold md:text-base text-sm">Origin:</span> {{ user.origin.name }}</li>
        </ul>
      </div>
    </article>
  </main>
  <Footer />
  <Modal />
</template>

<script>
import Modal from './Modal.vue'
import Footer from './Paginator.vue'
import { onMounted } from 'vue'
import { getUsers } from '../services';
import { useStore } from '../store/characters'

export default {
  name: 'Main',
  setup () {
    const { characters, setCharacters, toggleMenu, setCharacterSelected } = useStore()

    function handleClick (character) {
      setCharacterSelected(character)
      toggleMenu()
    }

    onMounted(async () => {
      try {
        const data = await getUsers()
        setCharacters(data)
      } catch (error) {
        console.log(error)
      }
    })

    return {
      characters,
      handleClick
    }
  },
  components: {
    Modal,
    Footer
  }
}
</script>