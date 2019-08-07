<template>
    <header class="header row center-align">
        <div class="col s12">
          <h1 :class="[cardHeader]" class="text-center text-gray-600 text-4xl font-semibold">{{ cardHeader }}</h1>
        </div>
      </header>
</template>


<script>
export default {
    props: {
        cardHeader: {
            default: 'Título',
            type: String
        }
    },

    data () {
        return {

        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>
