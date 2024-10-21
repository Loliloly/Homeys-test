<script setup lang="ts">
import BaseNotification from './BaseNotification.vue';
import { ref } from 'vue'

interface Notification
{
	title: string;
	text: string;
	type: 'info' | 'success' | 'warning' | 'danger';
	id: number;
}

// Create an array to hold notifications
const notifications = ref<Notification[]>([]);
let notifId: number = 0;

function addNotification(title: string, text: string, type: 'info' | 'success' | 'warning' | 'danger')
{
	let id = notifId;
	notifications.value.push({ title, text, type, id });
	notifId++;
}

function removeNotification(index: number)
{
	notifications.value.splice(index, 1);
}

// Tests for 4 notifs
addNotification("Modal Window", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", "success")
addNotification("Modal Window", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", "warning")
addNotification("Modal Window", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", "danger")
addNotification("Modal Window", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", "info")


</script>

<template>
	<main>
		<div class="notification-container">
			<div v-for="(notif, index) in notifications.slice().reverse()" :key="notif.id">
				<BaseNotification :title="notif.title" :text="notif.text" :type= "notif.type" @close="removeNotification(notifications.length - 1 - index)" />
			</div>
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


}



</style>
