<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        
        <todo-header cardHeader="My To-do App"></todo-header>

        <div v-if="state === 'edit'" class="flex flex-wrap mx-auto mt-10 w-full max-w-lg">
            <todo-input 
                v-model="newTask" 
                labelTitle="Task title" 
                inputId="Title" 
                id="Title" 
                type="text" 
                class="w-full m-2">
            </todo-input>
            <todo-input 
                v-model="newTaskContent" 
                labelTitle="Task description" 
                inputId="Description" 
                id="Description" 
                type="text" 
                class="w-full m-2"
                @enter="saveTask">
            </todo-input>
            <div class="flex mx-auto w-full">
                <todo-button 
                    buttonColor="bg-blue-400" 
                    hoverColor="hover:bg-blue-500" 
                    textColor="text-white" 
                    class="w-1/2 m-2 py-2 px-4" 
                    @click="saveTask">
                        Add task
                </todo-button>
                <todo-button 
                    buttonColor="bg-red-400" 
                    hoverColor="hover:bg-red-500" 
                    textColor="text-white" 
                    class="w-1/2 m-2 py-2 px-4"
                    @click="changeState('default')">
                        Cancel
                </todo-button>
            </div>
        </div>
        <div v-if="tasks.length > 0">
            <todo-card :class="{'bg-gray-500': task.done}" v-for="task in tasks" :key="task.id" class="flex mx-auto mt-5 w-full max-w-lg">
                <ul class="w-9/12">
                    <li @click="editTask(task)" 
                        v-if="!task.editing" 
                        :class="{'line-through': task.done}" 
                        class="hover:underline cursor-pointer text-2xl font-semibold text-gray-800"> 
                        {{task.title}} 
                    </li>
                    <todo-input v-else v-model="task.title"
                        labelTitle="Edit Title"
                        type="text" 
                        class="w-full m-2"
                        @enter="doneEdit(task)"
                        @blur="doneEdit(task)"
                        @esc="cancelEdit(task)">
                    </todo-input>
                    <hr>
                    <li v-if="!task.editing" > 
                       <span :class="{'text-gray-100': task.done}" class="text-base font-medium text-gray-800">Descripción de la tarea</span> 
                       <p :class="{'text-gray-100': task.done}" class="text-base font-light text-gray-800">{{task.content}}</p>
                    </li>
                    <todo-input v-else v-model="task.content"
                        labelTitle="Edit Description"
                        type="text"     
                        class="w-full m-2"
                        @enter="doneEdit(task)"
                        @blur="doneEdit(task)"
                        @esc="cancelEdit(task)">
                    </todo-input>                    
                </ul>
                <div class="flex items-start mx-2 w-3/12">
                    <todo-button 
                        buttonColor="bg-green-400" 
                        hoverColor="hover:bg-green-500" 
                        textColor="text-white" 
                        class="flex-1 float-right m-2 font-bold py-1 px-2"  
                        @click="taskDone(task)">
                            Done
                    </todo-button>                    
                    <todo-button 
                        buttonColor="bg-red-400" 
                        hoverColor="hover:bg-red-500" 
                        textColor="text-white" 
                        class="flex-1 float-right m-2 font-bold py-1 px-2"  
                        @click="removeTask(task)">
                            X
                    </todo-button>
                </div>
            </todo-card>
        </div>
        <div v-else class="flex flex-col  mx-auto mt-5 w-full max-w-lg" >
           <p v-if="tasks.length === 0" class="text-center text-base font-medium w-full text-gray-800">¡No tienes tareas pendientes!</p>
       </div>
        <div class="flex  mx-auto mt-5 w-full max-w-lg" >
            <todo-button
                buttonColor="bg-green-400" 
                hoverColor="hover:bg-green-500" 
                textColor="text-white" 
                class="mx-auto my-5 float-right m-2 font-bold py-1 px-2 w-1/3" 
                @click="changeState('edit')"
                v-if="state === 'default'">
                    Add a new task
            </todo-button>
            <todo-button
                buttonColor="bg-red-400"
                hoverColor="hover:bg-red-500" 
                textColor="text-white" 
                class="mx-auto my-5 float-right m-2 font-bold py-1 px-2 w-1/3" 
                @click="clearAll()"
                v-if="tasks.length > 0">
                    Clear all
            </todo-button>
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
            tasks: [],
            titleBeforeEditCache : '',
            contentBeforeEditCache: '',
        };
    },

    mounted () {

    },

    methods: {
        saveTask () {
            this.tasks.push({
                title: this.newTask,
                content: this.newTaskContent,
                done: false,
                editing: false
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
        },
        clearAll () {
            this.tasks = []
        },
        taskDone (task) {
            task.done = !task.done;
        },
        editTask (task) {
            this.titleBeforeEditCache = task.title;
            this.contentBeforeEditCache = task.content
            task.editing = !task.editing;
        },
        doneEdit (task) {
            task.editing = false;
        },
        cancelEdit (task) {
            task.title = this.titleBeforeEditCache;
            task.content = this.contentBeforeEditCache;
            task.editing = false;
        }
    }
}

</script>