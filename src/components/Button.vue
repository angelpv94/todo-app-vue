<template>
    <button :class="[buttonBg, hoverColor, textColor]" class="font-bold py-2 px-4 rounded">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        buttonBg: {
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

    }
}
</script>