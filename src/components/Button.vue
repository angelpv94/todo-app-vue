<template>
    <button 
        :class="[buttonColor, hoverColor, textColor]" 
        class="font-bold py-2 px-4 rounded" 
        @click="clicked()">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        buttonColor: {
            default: 'bg-blue-500',
            type: String
        },
        hoverColor: {
            default: 'hover:bg-blue-700',
            type: String
        },
        textColor: {
            default: 'text-white',
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
        clicked () {
            this.$emit('click', true)
        }
    }
}
</script>