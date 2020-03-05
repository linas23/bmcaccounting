<template>
  <div id="bill">
    <div class="container">
      <sequential-entrance fromRight> 
        <div class="row card">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_circle</i>
            <input type="text" :value="student.fullname">
            <label for="name" class="active">Full name</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">
              <i class="fas fa-graduation-cap"></i>
            </i>
            <input type="text" :value="student.faculty">
            <label for="faculty" class="active">Faculty</label>
          </div>
          <div class="input-field col s6">
            <div class="material-icons prefix">
              <i class="fas fa-sort-numeric-down"></i>
            </div>
            <input type="text" :value="student.rollno">
            <label for="rollno" class="active">Roll no</label>
          </div>
          <div class="input-field col s6">
            <div class="material-icons prefix">
              <i class="fas fa-layer-group"></i>
            </div>
            <input type="text" :value="student.level">
            <label for="level" class="active">Level</label>
          </div>
          <div class="input-field col s6 black-text">
            <div class="material-icons prefix white-text">
              <i class="fas fa-calendar-week"></i>
            </div>
            <input type="text" class="datepicker">
            <label for="date">Date</label>
          </div>
          <div class="input-field col s6">
            <div class="material-icons prefix">
              <i class="fas fa-clock"></i>
            </div>
            <input type="text" class="timepicker">
            <label for="time">time</label>
          </div>
          <div class="input-field col s12">
            <select v-model="bill" multiple>
              <option value="" disabled selected>Choose your option</option>
              <option value="123">Monthly fee</option>
              <option value="456">Admission fee</option>
              <option value="456">library fee</option>
            </select>
            <label for="bill">Billing for</label>
          </div>
          <div class="col s12">
            Total : Rs 123
          </div>
          <div class="center">
            <div class="btn" @click="verifyAndSave">
              verified and save
            </div>
          </div>
        </div>
      </sequential-entrance>  
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      student() {
        return this.$store.getters.billingStudent;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #bill {
    min-height: 90vh;
    background-color: #03423c;

    .container {
      padding: 50px;
        .card{
            background-color: #021b19;
            height: 75vh;
        }

    }
  }
</style>