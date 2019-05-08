<template>
  <div class="hello container">
    <h1>Input Your Data</h1>
    <div class="field">
      <div class="control">
        <input class="input is-info" type="text" placeholder="Family Name" v-model="familyName">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input is-info" type="text" placeholder="First Name" v-model="firstName">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input is-info" type="text" placeholder="Comment" v-model="comment">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <a class="button is-link" @click="onClick">Submit</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Api",
  data() {
    return {
      familyName: "",
      firstName: "",
      comment: ""
    };
  },
  methods: {
    onClick: function(e) {
      google.script.run.addData(
        JSON.stringify({
          familyName: this.familyName,
          firstName: this.firstName,
          comment: this.comment
        })
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
