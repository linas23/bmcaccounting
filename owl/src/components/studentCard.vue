<template>
<sequential-entrance fromBottom :delay="200" class="holder">
    <div class="card" v-for="(student, index) in students" :key="index">
        <img src="../assets/images/tu.png" alt="">
                <div class="title">
                    <i class="fa fa-user prefix"></i>
                    {{student.fullname}}
                </div>
                <div class="content">
                    <i class="fa fa-address-card prefix"></i>
                    {{student.address}}
                    <br>
                    <i class="fa fa-envelope prefix"></i>
                    {{student.email}}
                    <br>
                    <div>
                        <i class="fas fa-graduation-cap prefix"></i>
                        {{student.faculty}}
                        <i class="fas fa-layer-group prefix"></i>
                        {{student.level}}
                    </div>
                    <div class="btn btn-small" @click="viewDetails(student)">
                        View Profile
                    </div>
                </div>
            </div>
    </div>
</sequential-entrance>
</template>

<script>
export default {
    props:['students'],
    methods:{
        viewDetails(std){
            this.$store.dispatch('getProfileDetails',std.id).then(()=>{
                this.$router.push({name:'studentProfile',params:{name:std.fullname}});
            })
        }
    }
}
</script>

<style lang="scss" scoped>
        .card{
            // background-size:100% 100%;
            // background-repeat: no-repeat;
            // background-position-x: 100px;
            height:auto;
            width: 45%;
            margin: 15px;
            box-shadow: 0px 0px 15px black;
            display: inline-block;
            .title{
                padding: 5px 30px;
                font-size: 1.5rem;
            }
            .content{
                padding: 5px 30px;
                margin: 0px;
            }
            img{
                position: absolute;
                height: 100%;
                width: 100%;
                opacity: 0.5;
            }
        }
</style>