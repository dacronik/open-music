<template>
    <div>
        <h1 class=" text-5xl font-bold text-blue-600 mb-4"> Rock</h1>
        <card-group :music="rock"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CardGroup from '@/components/CardGroup.vue';
export default {
    name: 'rock-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['rock'])
    },
    //methods: {}
    // watch: {},
    components: {
        'card-group':CardGroup
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style>
    
</style>