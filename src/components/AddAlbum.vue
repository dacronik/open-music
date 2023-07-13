<template>
    <div class=" ">
        <h1 class=" text-2xl font-semibold mt-4 mb-4"> Agregar Nuevo Album</h1>
        <form class="form flex flex-wrap columns-12  justify-center gap-6 items-center">
            <div class="mb-6 columns-1">
                <label for="base-input" class=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Artista</label>
                <input v-model="artist" 
                type="text" 
                id="base-input" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{error:!hasArtistValid && formSend}">
                <p v-if="!hasArtistValid && formSend" class=" text-red-700">*Campo requerido</p>
            </div>
            <div class="mb-6 columns-1 ">
                <label for="base-input" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Album</label>
                <input v-model="album" 
                type="text" id="base-input" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{error:!hasAlbumValid && formSend}">
                <p v-if="!hasAlbumValid && formSend" class=" text-red-700">*Campo requerido</p>
            </div>
            <div class="mb-6 columns-1 sm:flex-col">
                <label for="base-input" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen Portada</label>
                <input v-model="image" 
                type="text" id="base-input" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{error:!hasImageValid && formSend}">
                <p v-if="!hasImageValid && formSend" class=" text-red-700">*Campo requerido</p>
            </div>
            <div class="columns-3 flex flex-col mb-6">
                <label for="generos" class="mb-1 text-sm font-medium text-gray-900 dark:text-white">Genero</label>
                <select id="generos" v-model="category" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Pop</option>
                    <option>Rock</option>
                    <option>Rap</option>
                </select>
            </div>
        </form>
        <button type="submit" @click="add" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Agregar Album</button>
    </div>
</template>

<script>

export default {
    name: 'add-album-comp',
    // props: {},
    data: function(){
        return {
            artist:'',
            album: '',
            image: '',
            category:'',
            formSend: false
        }
    },
    computed: {
        hasArtistValid(){
            //const expression = /^[a-zA-Z\s]*$/
            return this.validator(this.artist)
        },
        hasAlbumValid(){
            return this.validator(this.album)
        },
        hasImageValid(){
            return this.validator(this.image)
        },
        hasCategoryValid(){
            return this.validator(this.category)
        }
    },
    methods: {
        add(){
            this.formSend = true;
            if(this.validation()){
                let newAlbum ={
                artist:this.artist,
                album:this.album,
                image:this.image,
                category:this.category
            }
            this.$emit('addAlbum',newAlbum)
            this.$router.push(`/${this.category}`)
            this.clearForm()
            this.formSend=false
            }
            
        },
        validation(){
            let valid = true;
            if(!this.hasArtistValid || !this.hasAlbumValid || !this.hasImageValid || !this.hasCategoryValid){
                valid = false
            }
            return valid
        },
        clearForm(){
            this.artist = ''
            this.album = ''
            this.image = ''
            this.category = ''
        },
        validator(value){
            if(value !== ''){
                return true
            }
            return false
        }
    }
        
    //},
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .error{
        border: 1px solid red;
    }
</style>