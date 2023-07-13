<template>
    <div>
        <h1 class=" text-5xl font-bold text-blue-600 mb-4"> Pop</h1>
        <card-group :music="pop"/>
    </div>
</template>

<script>
import CardGroup from '@/components/CardGroup.vue'
import { mapState } from 'vuex';
export default {
    name: 'pop-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['pop']),
        
    },
    //methods: {}
    // watch: {},
    components: {
        'card-group': CardGroup
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style>
  
</style>