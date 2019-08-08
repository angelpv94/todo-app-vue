<template>
    <div class="w-screen h-screen fixed z-50 flex items-center justify-center pin modal-bg" v-if="show" @click.self="close">
        <todo-card class="bg-white w-full mx-1 md:w-1/2">
            <header v-bind:class="[bgHeader]">
                <div class="flex justify-between">
                    <slot name="header"></slot>
                    <todo-button  class="w-10 h-10" @click="close"> 
                        X
                    </todo-button>
                </div>   
            </header>

            <slot name="content"></slot>
            
        </todo-card>
    </div>
</template>

<script>
import Button from './Button.vue'
import Card from './Card.vue'

export default {
    components: {
        'todo-button': Button,
        'todo-card': Card,

    },
    data: function () {
        return {};
    },
    props: {
        bgHeader: {
            default: '',
            type: String
        },
        closeIconColor: {
            default: 'text-grey-800',
            type: String
        },
        show: {
            default: false,
            type: Boolean
        } 
    },

    methods: {
        close() {
            this.$emit('close');
        },
    },

    created () {
        const escapeHandler = e => {
            if (e.key === "Escape" && this.show) {
                this.close();
            }
        }
        document.addEventListener("keydown", escapeHandler)
        this.$once("hook:destroyed", () => {
            document.removeEventListener("keydown", escapeHandler);
        });
    }
  
}
</script>

<style>
.bgBackground{
    background-color:rgba(0, 0, 0, 0.75);
} 
</style> 