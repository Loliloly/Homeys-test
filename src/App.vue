<script setup lang="ts">
import BaseNotification from './BaseNotification.vue';
</script>

<template>
  <main>
    <div class="notification-container">
        <BaseNotification title="Modal Window" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"/>
        
        <!-- Tests with multiple notifications.
        <BaseNotification title="Modal gndow" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"/>
        <BaseNotification title="Modal lndow" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"/>
        <BaseNotification title="Modal mndow" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"/>
        <BaseNotification title="Modal fndow" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"/>
        <BaseNotification title="Modal andow" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"/>
        -->
    </div>
  </main>
</template>

<style scoped>

/* Where notifications will be stored*/

.notification-container
{
box-sizing: border-box;

position: relative;
width: 559px;
height: 808px;
display: flex;
flex-direction: column-reverse;


border-radius: 5px;
}

</style>
