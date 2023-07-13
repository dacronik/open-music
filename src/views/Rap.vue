<template>
    <div>
        <h1 class=" text-5xl font-bold text-blue-600 mb-4"> Rap</h1>
        <card-group :music="rap"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Cardgroup from '@/components/CardGroup.vue'
export default {
    name: 'rap-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['rap'])
    },
    //methods: {}
    // watch: {},
    components: {
        'card-group': Cardgroup
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style>
    
</style>