<template>
<div id="newRecord">
     <div class="container">
         <sequential-entrance fromRight> 
        <div class="card white-text" >
            <div class="card-title">
                Create a new bill record
            </div>
            <div class="row">
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">
                            <i class="fas fa-graduation-cap"></i>
                        </i>
                        <select v-model="faculty" name="faculty">
                            <option value="" disabled selected class="white-text">Choose your option</option>
                            <option value="BA">BA</option>
                            <option value="BBA">BBA</option>
                            <option value="BBS">BBS</option>
                            <option value="BSc">BSc</option>
                            <option value="BSc CSIT">BSc CSIT</option>
                            <option value="BSW">BSW</option>
                            <option value="Masters">Masters</option>
                        </select>
                        <label for="faculty">Select Faculty</label>
                    </div>
                    <!-- <div class="input-field col s12">
                        <div class="material-icons prefix">
                            <i class="fas fa-layer-group"></i>
                        </div>
                        <select v-model="level">
                            <option value="" disabled selected>Choose your level</option>
                            <option value="1st sem">1st sem</option>
                            <option value="2nd sem">2nd sem</option>
                            <option value="3rd sem">3rd sem</option>
                            <option value="4th sem">4th sem</option>
                            <option value="5th sem">5th sem</option>
                            <option value="6th sem">6th sem</option>
                            <option value="7th sem">7th sem</option>
                            <option value="8th sem">8th sem</option>
                        </select>
                        <label>Level</label>
                    </div> -->
                    <div class="input-field col s12">
                        <div class="material-icons prefix">
                            <i class="fa fa-book" aria-hidden="true"></i>
                        </div>
                        <input type="text" v-model="title">
                        <label for="">Enter billing title</label>
                    </div>
                    <div class="input-field col s12">
                        <div class="material-icons prefix">
                            <i class="fa fa-money" aria-hidden="true"></i>
                        </div>
                        <input type="Number"  v-model="amount">
                        <label for="">Amount</label>
                    </div>
                    <div class="center">
                        <div class="btn" @click="saveNewBill">
                            New Billing
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
            faculty:'',
            title:'',
            amount:''
        }
    },
    mounted(){
        M.AutoInit();
    },
    methods:{
        saveNewBill(){
            this.$store.dispatch('saveNewBill',{faculty:this.faculty,title:this.title,amount:this.amount})
                        .then(()=>{
                            this.$router.push('/admin');
                        })
        }
    }
}
</script>

<style lang="scss" scoped>
    #newRecord{
        background-color: #03423c;
        height: 90vh;

        // color:black;
        .container{
            height: 100%;
            padding: 100px 300px;
        }
        .card{
            padding: 20px;
            background-color: #1b534f;
            // color: white;
            margin: 0px;
            height: auto;
            width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly   ;
        }
    }
</style>