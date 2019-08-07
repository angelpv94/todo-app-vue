<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        
        <todo-header cardHeader="My To-do App"></todo-header>

        <div class="flex mx-auto mt-10 w-full max-w-lg">
            <todo-input class="w-3/5 m-2"></todo-input>
            <todo-button class="w-2/5 m-2">Add task</todo-button>
        </div>

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