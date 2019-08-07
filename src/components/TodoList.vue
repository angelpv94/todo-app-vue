<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        
        <todo-header cardHeader="My To-do App"></todo-header>

        <todo-card class="mx-auto mt-4 h-64 w-full max-w-lg">
            This is a test
        </todo-card>

        <todo-card class="mx-auto mt-10 w-full max-w-lg">
            <todo-button>Botón</todo-button>
         </todo-card>
        <todo-card class="mx-auto mt-10 w-full max-w-lg">
            <todo-input></todo-input>
        </todo-card>
    </div>
</template>

<script>
export default {
    props: {

    },

    data () {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Example task',
                    done: false
                }
            ]
        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>