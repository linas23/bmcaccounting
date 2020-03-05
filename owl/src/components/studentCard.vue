<template>
        <sequential-entrance fromBottom >
            <div class="card" v-for="(student, index) in students" :key="index">
                        <div class="title">
                            {{student.name}}
                        </div>
                        <div class="content">
                            <div class="btn btn-small" @click="viewdetails(student.rollno)">
                                View Profile
                            </div>
                            <br>
                            {{student.address}}
                            <br>
                            {{student.email}}
                            <br>
                            {{student.faculty}}
                        </div>
                    </div>
            </div>
        </sequential-entrance>
</template>

<script>
export default {
    props:['students']
}
</script>

<style>

</style>