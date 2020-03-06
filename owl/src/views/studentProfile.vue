<template>
  <div id="studentProfile">
      <div class="container">
          <div class="center">
              <img src="../assets/images/tu.png" alt="">
          </div>
          <div class="heading">
              Student's profile
          </div>
          <div class="row">
              <div class="col s3">
                  Name
              </div>
              <div class="col s9">
                  {{profile.fullname}}
              </div>
              <div class="col s3">
                  Email
              </div>
              <div class="col s9">
                  {{profile.email}}
              </div>
              <div class="col s3">
                    Address
              </div>
              <div class="col s9">
                    {{profile.address}}
              </div>
              <div class="col s3">
                Faculty
              </div>
              <div class="col s9">
                {{profile.faculty}}
              </div>
              <div class="col s3">
                Level
              </div>
              <div class="col s9">
                {{profile.level}}
              </div>
              <div class="col s3">
                 Roll no
              </div>
              <div class="col s9">
                    {{profile.rollno}}
              </div>
              <div class="col s3">
                Phone
              </div>
              <div class="col s9">
                {{profile.phone}}
              </div>
              <div class="payments">
                  <h4>
                      Here are your latest payment records.
                  </h4>
                  <div class="details">
                      {{profile.bills}}
                      <div class="card">a</div>
                      <div class="card">a</div>
                      <div class="card">a</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        profile(){
            let profile= this.$store.getters.studentProfile;
            const removeFields=['_id','id','firstName','lastName','__v']
            removeFields.forEach(el=>{
                delete profile[el];
            })

            return profile;
        }
    }
}
</script>

<style lang="scss">
#studentProfile{
    min-height: 90vh;
    background-color: #03423c;

    .container{
        padding: 20px;
        .heading{
            margin: 10px;
            font-size: 2.3rem;
        }
        img{
            height: 150px;
            width:300px;
        }
        .col{
            font-size: 1.4rem;
            height: 70px;
        }
    }
}
</style>