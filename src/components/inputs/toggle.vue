<template>
    <input
        class="input field__checkbox-input"
        :id="props.context.id"
        :value="props.context._value"
        :disabled="disabled"
        :readonly="readonly"
        type="checkbox"
    >
    <label class="field__checkbox-label" :for="props.context.id">
        {{ props.context.label }}
    </label>
</template>

<script setup>
import { defineProps, ref, onUpdated, computed } from 'vue';

const props = defineProps({
    context: {
        type: Object,
        default: () => {}
    }
});
const placeholder = props.context.placeholder || '';
const disabled = props.context.disabled || false;
const readonly = props.context.readonly || false;
</script>
