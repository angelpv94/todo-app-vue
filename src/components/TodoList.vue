<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        
        <todo-header cardHeader="My To-do App"></todo-header>

        <div v-if="state === 'edit'" class="flex flex-wrap mx-auto mt-10 w-full max-w-lg">
            <label for="taskTitle">
                <span class="text-base font-semibold text-gray-700">Título de la tarea</span>
            </label>
            <input 
                placeholder="Inserte el título de la tarea"
                type="text"
                id="taskTitle"
                v-model="newTask" 
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                @keyup.enter="saveTask">
            <label for="taskTitle">
                <span class="text-base font-semibold text-gray-700">Descripción de la tarea</span>
            </label>
            <input 
                placeholder="Inserte la descripción de la tarea"
                type="text"
                id="taskContent"
                v-model="newTaskContent" 
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                @keyup.enter="saveTaskContent">    
                      
            <div class="flex mx-auto w-full">
                <button 
                    class="bg-green-500 hover:bg-green-700 text-white w-1/2 m-2 font-bold py-2 px-4 rounded" 
                    @click="saveTaskByButton">
                        Add task
                </button>
                <button 
                    class="bg-red-500 hover:bg-red-700 text-white w-1/2 m-2 font-bold py-2 px-4 rounded" 
                    @click="changeState('default')">
                        Cancel
                </button>
            </div>
        </div>
        <div v-if="tasks.length > 0">
            <todo-card v-for="task in tasks" :key="task.id" class="flex mx-auto mt-5 w-full max-w-lg">
                
                <ul class="w-10/12">
                    <li class="text-2xl font-semibold text-gray-800"> 
                        {{task.title}} 
                    </li>
                    <hr>
                    <li> 
                       <span class="text-base font-medium text-gray-800">Descripción de la tarea</span> 
                       <p class="text-base font-light text-gray-800">{{task.content}}</p>
                    </li>
                </ul>
                <div class="flex items-start mx-2 w-2/12">
                    <button 
                        class="flex-1 bg-red-500 hover:bg-red-600 text-white float-right m-2 font-bold py-1 px-2 rounded" 
                        @click="removeTask(task)">
                            X
                    </button>
                    <button 
                        class="flex-1 bg-green-500 hover:bg-green-600 text-white float-right m-2 font-bold py-1 px-2 rounded" 
                        @click="removeTask(task)">
                            V
                    </button>
                </div>
                
                <hr>
            </todo-card>
        </div>
       <div v-else class="flex flex-col  mx-auto mt-5 w-full max-w-lg" >
           <p v-if="tasks.length === 0" class="text-center text-base font-medium w-full text-gray-800">¡No tienes tareas pendientes!</p>

       </div>
        <div class="flex flex-col  mx-auto mt-5 w-full max-w-lg" >
           
           <button 
                class="mx-auto my-5 bg-green-500 hover:bg-green-600 text-white float-right w-1/2 font-bold py-1 px-2 rounded" 
                @click="changeState('edit')"
                >
                    Crear una tarea
            </button>
       </div>
       
       
    </div>
</template>

<script>
export default {
    props: {

    },

    data () {
        return {
            state: 'default',
            newTask: '',
            newTaskContent: '',
            tasks: []
        };
    },

    mounted () {

    },

    methods: {
        saveTask() {
            this.tasks.push({
                title: this.newTask,
                content: this.newTaskContent,
                done: false
            });
            this.newTask = '';
            this.newTaskContent = '';
        },
        saveTaskContent () {
            this.tasks.push({
                content: this.newTaskContent
            });
            this.newTaskContent = '';
        },
        saveTaskByButton() {
            this.tasks.push({
                title: this.newTask,
                content: this.newTaskContent,
                done: false
            });
            this.newTask = '';
            this.newTaskContent = '';
        },
        removeTask(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        },
        changeState(newState) {
            this.state = newState;
            this.newTask = '';
            this.newTaskContent = '';
        }
    }
}
</script>