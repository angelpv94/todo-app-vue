<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        
        <todo-header cardHeader="My To-do App"></todo-header>

        <div class="flex flex-wrap mx-auto mt-10 w-full max-w-lg">
            <label for="taskTitle"></label>
            <input 
                placeholder="Inserte el título de la tarea"
                type="text"
                id="taskTitle"
                v-model="newTask" 
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                @keyup.enter="saveTask">
                      
            <div class="flex mx-auto w-full">
                <button class="bg-green-500 hover:bg-green-700 text-white w-1/2 m-2 font-bold py-2 px-4 rounded" 
                     
                    @click="saveTask">
                        Add task
                </button>
                <todo-button buttonColor="bg-red-500" hoverColor="hover:bg-red-700" textColor="text-gray-200" class="w-1/2 m-2">Cancel</todo-button>
            </div>
        </div>
       <todo-card class="flex mx-auto mt-5 w-full max-w-lg" v-if="tasks.length > 0">
           <ul>
               <li v-for="task in tasks" :key="task.id"> {{task}} </li>
           </ul>
       </todo-card>
       
    </div>
</template>

<script>
export default {
    props: {

    },

    data () {
        return {
            newTask: '',
            /*newTaskContent: '',*/
            tasks: []
        };
    },

    mounted () {

    },

    methods: {
        saveTask() {
            this.tasks.push(this.newTask,
            );
            this.newTask = '';
        }
    }
}
</script>