<template>
    <div>
        <button class="btn border border-white capitalize" @click="changeMode">
    {{ btnLabel }}
</button>
    </div>
</template>

<script>
export default {
    computed: {
        btnLabel() {
            return this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    },
    methods: {
        changeMode() {
            this.$colorMode.preference = 
                this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    }
}

</script>