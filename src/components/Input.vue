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
        @keyup.enter="enter"
        @input="updateContent($event.target.value)" 
        :value="value"
        :id="id" 
        :placeholder="placeholder" 
        :type="type" 
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block my-2 w-full appearance-none leading-normal">
    </div>
</template>

<script>
export default {
    props: {
        value: {},
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
        updateContent(content) {
            this.testContent = content;
            this.$emit('input', content);
        },
        enter () {
            this.$emit('enter', null)
        }

    }
}
</script>