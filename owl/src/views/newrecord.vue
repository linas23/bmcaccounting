<template>
<div id="newRecord">
     <div class="container">
        <div class="card white-text">
            <h4>Fill up the form</h4>
            <div class="row">
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <i class="material-icons prefix">account_circle</i>
                        <input type="text"  v-model="name">
                        <label for="name">Full Name</label>
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">
                            <i class="fas fa-graduation-cap"></i>
                        </i>
                        <input type="text" v-model="faculty">
                        <label for="faculty">Faculty</label>
                    </div>
                    <div class="input-field col s6">
                        <div class="material-icons prefix">
                            <i class="fas fa-sort-numeric-down"></i>
                        </div>
                        <input type="text" v-model="rollno">
                        <label for="roll">Roll no</label>
                    </div>
                    <div class="input-field col s6">
                        <div class="material-icons prefix">
                            <i class="fas fa-layer-group"></i>
                        </div>
                        <input type="text" v-model="level">
                        <label for="level">Level</label>
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
                            <!-- <option value="" disabled selected>Choose your option</option> -->
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
                </form>
            </div>
        </div>
     </div>
</div>
</template>

<script>
import M from 'materialize-css'

export default {
    data(){
        return{
            name:'',
            faculty:'',
            rollno:'',
            level:'',
            date:'',
            time:'',
            bill:[],
            total:''
}
    },
    methods:{
        verifyAndSave(){
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
    },
    mounted(){
        M.AutoInit();
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
        }
        .card{
            padding: 20px;
            background-color: #021b19;
            color: black;
            margin: 0px;
            height: inherit;
        }
    }
</style>