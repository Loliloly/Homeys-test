<script setup lang="ts">
import BaseNotification from './BaseNotification.vue';
</script>

<template>
	<main>
		<div class="notification-container">
			<BaseNotification title="Modal Window" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type= "danger"/>
			<BaseNotification title="Modal Window" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type= "warning"/>
			<BaseNotification title="Modal Window" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type= "info"/>
			<BaseNotification title="Modal Window" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type= "success"/>
			<!-- <BaseNotification title="Modal Window" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor" type= ""/> -->
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
