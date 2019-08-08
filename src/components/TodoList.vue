<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        
        <todo-header cardHeader="My To-do App"></todo-header>

        <div class="flex flex-wrap mx-auto mt-10 w-full max-w-lg">
            <todo-input 
                v-model="newTask" 
                labelTitle="Task title" 
                inputId="Title" 
                id="Title" 
                type="text" 
                class="w-full m-2"
                @enter="saveTask">
            </todo-input>
            <!--<todo-input 
                v-model="newTaskContent" 
                labelTitle="Task description" 
                inputId="Description" 
                id="Description" 
                type="text" 
                class="w-full m-2">
            </todo-input>-->
            <div class="flex mx-auto w-full">
                <todo-button 
                    buttonColor="bg-green-500" 
                    hoverColor="hover:bg-green-700" 
                    textColor="text-white" 
                    class="w-1/2 m-2" 
                    @click="saveTask">
                        Add task
                </todo-button>
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
            this.tasks.push(this.newTask);
            this.newTask = '';
        }
    }
}

</script>