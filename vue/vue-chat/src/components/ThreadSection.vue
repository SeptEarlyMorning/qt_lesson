<template>
  <div class="thread-section">
    <div class="thread-count"></div>
    <ul class="thread-list">
      <thread
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
        :active="thread.id === currentThread.id"
        @switch-thread="switchThread"
      />
    </ul>
  </div>
</template>
<script>
import Thread from "./Thread";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["threads", "currentThread"]),
  components: {
      Thread
  },
  methods: mapActions(['switchThread'])
};
</script>
<style>
</style>
