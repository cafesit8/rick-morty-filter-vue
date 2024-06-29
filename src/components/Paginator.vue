<template>
  <footer class="max-w-6xl m-auto mt-6">
    <Paginator :rows="20" :totalRecords="characters.info.count" :pageLinkSize="3" @page="(e) => handleClick(e)" />
  </footer>
</template>

<script>
import Paginator from 'primevue/paginator';
import { getUsers } from '../services/index'
import { useStore } from '../store/characters';

export default {
  name: 'Footer',
  setup () {
    const { setCharacters, characters } = useStore()
    async function handleClick (page) {
      try {
        const response = await getUsers(page.page + 1)
        setCharacters(response)
      } catch (error) {
        console.log(error)
      }
    }

    return {
      handleClick,
      characters
    }
  },
  components: {
    Paginator
  }
}
</script>