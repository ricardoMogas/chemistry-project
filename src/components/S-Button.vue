<template>
    <button :class="[buttonClass, sizeClass, animationClass]" @click="handleClick" :style="buttonStyle">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, h, PropType } from 'vue';

export default defineComponent({
    name: 'S-Button',
    props: {
        color: {
            type: String as PropType<'primary' | 'secondary' | 'success' | 'danger' | 'tertiary'>,
            default: 'primary'
        },
        size: {
            type: String as PropType<'small' | 'medium' | 'large'>,
            default: 'medium'
        },
        animation: {
            type: Boolean,
            default: true
        },
        width: {
            type: String,
            default: null
        },
        height: {
            type: String,
            default: null
        }
    },
    computed: {
        buttonClass(): string {
            return `btn btn-${this.color}`;
        },
        sizeClass(): string {
            return `size-${this.size}`;
        },
        animationClass(): string {
            return this.animation ? 'btn' : 'btn_no-animation';
        },
        buttonStyle(): object {
            return {
                width: this.width ? `${this.width}px` : 'auto',
                height: this.height ? `${this.height}px` : 'auto'
            };
        }
    },
    methods: {
        handleClick() {
            this.$emit('click');
        }
    }
});
</script>

<style>
.btn {
    padding: 4px 16px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.3s linear, box-shadow 0.3s linear;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.btn_no-animation:hover {
    transform: none;
    box-shadow: none;
    opacity: 0.8;
}

/* Tamaños de letra */
.size-small {
    font-size: 10px;
}

.size-medium {
    font-size: 14px;
}

.size-large {
    font-size: 20px;
}

/* Color de botones */
.btn-primary {
    background-color: var(--primary-color);
    color: white;
}

.btn-secondary {
    background-color: var(--secondary-color);
    color: white;
}

.btn-tertiary {
    background-color: var(--tertiary-color);
    color: black;
}

.btn-success {
    background-color: var(--accent-color);
    color: white;
}

.btn-danger {
    background-color: var(--reject-color);
    color: white;
}
</style>
