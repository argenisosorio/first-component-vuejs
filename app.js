Vue.component('movie-card', {
  props: ['title','image'],
  template: `
  <div>
    <img width="100" v-bind:src="image" v-bind:alt="title"/>
    <h2>{{ title }}</h2>
  </div>
  `
})

new Vue({
  el: '#app'
})