<template>
<sequential-entrance fromBottom :delay="200">
    <div class="card" v-for="(student, index) in students" :key="index">
        <img src="../assets/images/tu.png" alt="">
                <div class="card-title">
                    <i class="fa fa-user prefix"></i>
                    {{student.fullname}}
                </div>
                <div class="card-content">
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
                    <div class="btn btn-small" @click="deleteStudent(student,index)">
                        <i class="fa fa-trash-o"></i>
                    </div>
                    <!-- <div class="btn btn-small" @click="upadteStudent(student)">
                        <i class="fa fa-edit"></i>
                    </div> -->
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
            console.log('hello')
            this.$store.dispatch('getProfileDetails',std.id).then(()=>{
                this.$router.push({name:'studentProfile',params:{name:std.fullname}});
            })
        },
        deleteStudent(std,index){
            this.$store.dispatch('deleteStudent',std.id).then(()=>{
                this.students.splice(index,1);
                /* if(this.$route.params){
                    this.$router.push({name:'getAllStudentsOfFaculty',params:{faculty:std.faculty}});
                }else{
                    this.$router.push({name:'getAllStudents'});
                } */
            });
        },
        updateSudent(std){
            
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
            .card-title{
                padding: 5px 30px;
                font-size: 1.5rem;
            }
            /* .content{
                padding: 5px 30px;
                margin: 0px;
            } */
            img{
                position: absolute;
                height: 100%;
                width: 100%;
                opacity: 0.5;
                z-index: -1;
            }
            .btn-small{
                margin:15px 10px 0px 0px;
                background:red;
                cursor: pointer;

            }
        }
</style>