<template>
    <div class="card-container grid md:grid-cols-3">
        <div class="card " v-for="album in music" :key="album.id">
            <h3 class=" text-lg font-bold">{{ album.artist }}</h3>
            <div class="flex justify-center h-36">
                <img class="" :src="album.image" alt="imagen de album">
            </div>
            <h3 class="text-md font-semibold">{{ album.album }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'component-name',
    props: {
        music:{
            type: Array,
            requared: true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .card-container{
        width: 70%;
        margin: 0 auto;
        gap: 12px;
    }
    .card{
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        
    }
</style>