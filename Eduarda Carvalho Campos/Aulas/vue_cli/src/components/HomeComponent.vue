<template>
    <div>
        <footer id="footer">
            <p>Bem indo: {{ name }}Olá mundo o <b>VUE com CLI</b>!</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'HomeComponent',
            data() {
                return {
                name: 'Eduarda'
        }
    }
}

</script>