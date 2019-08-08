<template>
    <div>
        <label :for="inputId">
            <span 
                :class="[labelTitle]" 
                class="text-base font-semibold text-gray-700"> 
                {{labelTitle}} 
            </span>
        </label>
        <input 
        @keyup.enter="okay" 
        :v-model="v-model" 
        :id="id" 
        :placeholder="placeholder" 
        :type="type" 
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block my-2 w-full appearance-none leading-normal">
    </div>
</template>

<script>
export default {
    props: {
        inputId: {
            default: 'My input id',
            type: String
        },
        labelTitle: {
            default: 'Input Title',
            type: String
        },
        model: {
            default: '',
            type: String
        },
        id: {
            default: 'My input id',
            type: String
        },
        placeholder: {
            default: 'Insert text here',
            type: String
        },
        type: {
            default: 'text',
            type: String
        },
    },

    data () {
        return {

        };
    },

    mounted () {

    },

    methods: {
        okay () {
            this.$emit('enter')
        }

    }
}
</script>