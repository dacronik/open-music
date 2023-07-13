<template>
  <div class="md:p-6">
    <div class=" border-2 border-gray-600 md:p-2">
      <div class="p-24 hero">
        <h1 class=" text-5xl font-bold flex items-center justify-center">
          Open Music
        </h1>
      </div>
    </div>
    <div>
      
      <h2 class=" text-2xl text-blue-600 font-semibold p-4">Categorias</h2>
      <h2 class="text-lg mb-4 text-blue-600">Numero de albums: {{ totalAlbums }}</h2>
      <div class="flex gap-5 justify-center">
        <button type="button" @click="$router.push('/pop')" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-32">Pop({{ totalPop }})</button>
        <button type="button" @click="$router.push('/rock')" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-32">Rock({{ totalRock }})</button>
        <button type="button" @click="$router.push('/rap')" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-32">Rap({{ totalRap }})</button>
      </div>
      <div>
        <add-album @addAlbum="addNewAlbum"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters,mapActions } from 'vuex';
import AddAlbum from '@/components/AddAlbum.vue'
export default {
  name: 'HomeView',
  components: {
    'add-album':AddAlbum
  },
  data: function(){
    return {
    }
  },
  computed: {
    ...mapGetters(['totalPop','totalRock','totalRap','totalAlbums']),
    
  },
  methods:{
    ...mapActions(['addAlbum']),

    addNewAlbum(newAlbum){
      this.addAlbum(newAlbum)
    },

  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:900');
  .hero{
    background-image: url('../assets/img/concierto.jpg');
    background-position: center;
    background-size: cover;
  }

  

  h1 {
    color: #35322a;
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 900;
  }

</style>
