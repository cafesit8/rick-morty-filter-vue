<template>
  <Dialog class="md:w-[500px] w-[90%]" v-model:visible="visible" :closable="false" modal :header="character?.name" >
    <div class="flex gap-3">
      <picture class="w-3/6 block overflow-hidden rounded-md">
        <img :src="character?.image" alt="">
      </picture>
      <div class="w-3/6">
        <ul>
          <li><span class="font-semibold">Status:</span> {{ character?.status }}</li>
          <li><span class="font-semibold">Specie:</span> {{ character?.species }}</li>
          <li><span class="font-semibold">Origin:</span> {{ character?.origin.name }}</li>
          <li><span class="font-semibold">Gender:</span> {{ character?.gender }}</li>
          <li><span class="font-semibold">Episodes:</span> {{ character?.episode.length }}</li>
        </ul>
      </div>
    </div>
    <div class="flex mt-4">
      <Button type="button" class="w-full" label="Cerrar" severity="secondary" @click="toggle"></Button>
    </div>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog'
import { useStore } from '../store/characters.js'
import { computed } from 'vue';
import Button from 'primevue/button';

export default {
  name: 'Modal',
  setup() {
    const store = useStore()
    const visible = computed(() => store.visible)
    const character = computed(() => store.characterSelected.data)

    const toggle = () => store.toggleMenu()

    return {
      visible,
      toggle,
      character
    }
  },
  components: {
    Dialog,
    Button
  }
}
</script>