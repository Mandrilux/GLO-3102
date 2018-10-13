<template>
    <header>
        <div class="div-logo">
            <h1>TodoListVueJS</h1>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #97b8ed;
        padding: 15px 0;
    }
    header > * > h1 {
        text-transform: uppercase;
    }
</style>
