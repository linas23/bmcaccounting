<template>
  <div id="bill">
    <div class="container">
      <sequential-entrance fromRight> 
        <div class="row card white-text">
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
          <!-- <div class="input-field col s6">
            <div class="material-icons prefix">
              <i class="fas fa-clock"></i>
            </div>
            <input type="text" class="timepicker" v-model="time">
            <label for="time">time</label>
          </div>
                    
          <div class="input-field col s6 ">
            <div class="material-icons prefix ">
              <i class="fas fa-calendar-week"></i>
            </div>
            <input type="text" class="datepicker" v-model="date">
            <label for="date">Date</label>
          </div> -->

          <div class="input-field col s12">
            <select v-model="bill" multiple>
              <option value="" disabled selected>Choose your option</option>
              <option  v-for="(fee,index) in fees" :key="index" :value="index">
                {{fee.head}}
              </option>
            </select>
            <label for="bill">Billing for</label>
          </div>
          <div class="col s12">
            <!-- Total : {{total || 0}} -->
          </div>
          <div class="center">
            <div class="btn" @click="verifyAndSave(student._id)">
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
    data(){
      return{
        bill:[],
      }
    },
    watch:{
      total:function(){
        let sum = 0;
        this.bill.forEach(el=>{
             sum += this.fees[el].amount;
         })
         return sum;
      }
    },
    computed: {
      student() {
        return this.$store.getters.billingStudent;
      },
      fees(){
        return this.$store.getters.fees;
      }
    },
    methods:{
      verifyAndSave(id){
          const particulars = [];
          this.bill.forEach(el=>{
            const amount = this.fees[el].amount;
            const field = this.fees[el].head
            const detail = {
              amount,
              field
            }
            particulars.push(detail)
          })
          const studentId = id;
          this.$store.dispatch('verifyAndSave',{particulars,studentId})
                .then(()=>{
                  this.$router.push('/admin');
                });
      }
    },
    mounted(){
      M.AutoInit();
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
            background-color: #1b534f;
            height: 75vh;
        }

    }
  }
</style>