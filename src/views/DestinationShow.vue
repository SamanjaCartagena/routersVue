<template>
  <div>
      <section class="destination">
                 <h1>{{destination.name}}</h1>

       <div class="destination-details">
          <img :src="`/images/${destination.image}`" :alt="destination.name">
          <p>{{destination.description}}</p>
       </div>
      </section>
  </div>
</template>

<script>
import sourceData from '/data.json';
export default {
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
    
    destination(){
        return sourceData.destinations.find(destination => destination.id === this.destinationId)
    }
    },
    methods:{
      async initData(){
             const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
       this.destination = await response.json()
      }
    },
   async created(){
       this.initData()
       
    }

}
</script>

<style>

</style>