<template>
    <div class="h-screen flex flex-col">
        <header>
            <slot name="header"></slot>
        </header>
        <section class="flex-grow">
            <slot name="content"></slot>
        </section>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'app-template'
}
</script>
