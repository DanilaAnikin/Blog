<script setup>
import {onMounted, ref} from 'vue';
import { supabase } from '../supabase.js';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import Posts from './Posts.vue'

const allPosts = ref([]);
const input = ref('');

const date = new Date().toLocaleDateString().replaceAll('/', '-')

const fullTime = new Date().toLocaleTimeString()
const tim = fullTime.slice(fullTime.length-6, fullTime.length-3)
const time = fullTime.replace(tim, '')

const channel = supabase
  .channel('table-db-changes')
  .on('postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'posts',
    },
    (payload) => allPosts.value.push(payload.new)
  ).subscribe()

const getPosts = async() => {
  const {data} = await supabase.from('posts').select();
  allPosts.value = data;
}

const createPost = async() => {
  if(input.value != ''){
    const {createPost} = await supabase.from('posts').insert({date: date, time: time, text: input.value});
    input.value = '';
  }
}

onMounted(getPosts);
</script>


<template>
  <div class="h-full w-full p-12 kokot123 overflow-y-scroll">
    <Posts :allPosts="allPosts"/>
  </div>

  <div class="w-full flex justify-center absolute bottom-10">
    <input v-on:keyup.enter="createPost" v-model="input" class="w-1/2 p-3 rounded-lg bg-transparent focus:bg-white border border-gray-900 text-gray-900 focus:placeholder:text-gray-400 placeholder:text-gray-700" placeholder="Post smth...">
    <PaperAirplaneIcon class="w-7 h-7 text-gray-600 hover:text-green-500 my-3 -ml-10" @click="createPost"/>
  </div>

</template>

<style scoped>
  .kokot123{
    height: calc(100vh - 20rem)
  }
</style>