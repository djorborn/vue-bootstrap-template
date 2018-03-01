<template>
     <div class="container-fliud">
         <button class="btn btn-primary">{{btn}}</button>
     </div>
</template>

<script>

    export default {
        name: 'app',
        data () {
            return {
                btn: 'Bootstrap'
            }
        },
        components: {
        
        }
    }
</script>

<style lang="scss">
   .mybtn {
       font-size: 30px;
       position: absolute;
       z-index: 4;
   }
</style>