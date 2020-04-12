<template>
    <div class="person-box">
        <img :src="person.img" class="person-img">
        <div class="person-text">
            <p class="position">{{ person.position }}</p>
            <div class="wrapper">
                <p class="name">
                    {{person.firstname}}<br>{{person.lastname}}
                </p>
                <i class="la la-lg la-angle-down"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"PersonKachel",
    props: [
      'person'
    ],
    computed:{
    }
}
</script>

<style lang="scss" scoped>
.person-box{
    border-style: solid;
    color: #e5007d;
    display: grid;
    grid-template-columns: 7rem auto;
    i{
        color: black;
    }
}

.person-text{
    padding: .5rem;
    .position{
        font-size: 1rem;
        font-weight: 800;
        color: black;
        margin-top: 0rem;
        margin-bottom: 0.5rem;
    }
    .name{
        font-size: 1.7rem;
        line-height: 1.7rem;
        font-weight: 900;
        text-transform: uppercase;
        margin-top: 0rem;
        margin-bottom: 0rem;
    }
    .wrapper{
        display: grid;
        grid-template-columns: auto auto;
        align-items: center !important;
        justify-content: space-between;
        i{
            font-size: 2.5rem;
        }
    }
}

img {
    width: 7rem;
    height: auto;
}
</style>