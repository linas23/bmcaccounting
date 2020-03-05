<template>
<div id="newRecord">
     <div class="container">
         <sequential-entrance fromRight> 
        <div class="card white-text">
            <div class="card-title">
                Create a new record
            </div>
            <div class="row">
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">
                            <i class="fas fa-graduation-cap"></i>
                        </i>
                        <select v-model="faculty">
                            <option value="" disabled selected>Choose your option</option>
                            <option value="BA">BA</option>
                            <option value="BBA">BBA</option>
                            <option value="BBS">BBS</option>
                            <option value="BSc">BSc</option>
                            <option value="BSc CSIT">BSc CSIT</option>
                            <option value="BSW">BSW</option>
                            <option value="Masters">Masters</option>
                        </select>
                        <label for="">Select Faculty</label>
                    </div>
                    <div class="input-field col s12">
                        <div class="material-icons prefix">
                            <i class="fas fa-sort-numeric-down"></i>
                        </div>
                        <input type="text" v-model="rollno">
                        <label for="roll">Roll no</label>
                    </div> 
                    <div class="center">
                        <div class="btn" @click="searchStudent">
                            Get a student
                        </div>
                    </div>
                   
                </div>
                </form>
            </div>
        </div>
         </sequential-entrance>
     </div>
</div>
</template>

<script>
import M from 'materialize-css'

export default {
    data(){
        return{
            /* name:'',
            faculty:'',
            rollno:'',
            level:'',
            date:'',
            time:'',
            bill:[],
            total:'' */
            faculty:'',
            rollno:''
}
    },
    methods:{
        searchStudent(){
            this.$store.dispatch('searchStudent',{f:this.faculty,r:this.rollno})
                        .then(()=>{
                            this.$router.push({name:'billingForm'})
                        })
        }
        /* verifyAndSave(){
            const details = {
                name,
                faculty,
                rollno,
                level,
                date,
                time,
                bill,
                total
            }
            this.$store.dispatch('saveABill',details);
        }
            */
    },
    mounted(){
        M.AutoInit();
    }
}
</script>

<style lang="scss" scoped>
    #newRecord{
        background-color: #03423c;
        min-height: 90vh;
        // color:black;
        .container{
            height: 100%;
            padding: 150px 300px;
        }
        .card{
            padding: 20px;
            background-color: #021b19;
            color: black;
            margin: 0px;
            height: 400px;
            width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly   ;
        }
    }
</style>