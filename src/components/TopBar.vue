<script setup>
    import {ref} from 'vue'
    import {UserIcon, InformationCircleIcon, ArrowLeftOnRectangleIcon, HomeIcon} from '@heroicons/vue/24/outline'
    import Dashboard from './Dashboard.vue'
    import Profile from './Profile.vue'
    import Info from './Info.vue'
    import Logout from './Logout.vue'

    const onDashboard = ref(true)
    const onProfile = ref(false)
    const onInfo = ref(false)
    const onLogout = ref(false)

</script>

<template>

    <div class="bg-gray-400 h-12 w-full flex items-center justify-end space-x-7 px-4">
        <HomeIcon class="icon" @click="onDashboard = true, onProfile = false, onInfo = false, onLogout = false"/>
        <UserIcon class="icon" @click="onDashboard = false, onProfile = true, onInfo = false, onLogout = false"/>
        <InformationCircleIcon class="icon" @click="onDashboard = false, onProfile = false, onInfo = true, onLogout = false"/>
        <ArrowLeftOnRectangleIcon class="w-7 h-7 text-white hover:text-red-600" @click="onDashboard = false, onProfile = false, onInfo = false, onLogout = true"/>
    </div>

    <Dashboard v-if="onDashboard"/>
    <Profile v-if="onProfile"/>
    <Info v-if="onInfo"/>
    <Logout v-if="onLogout"/>

</template>

<style scoped>
.icon{
    width: 1.75rem;
    height: 1.75rem;
    color: white;
}
.icon:hover{
    color: rgb(34 197 94);;
}
</style>