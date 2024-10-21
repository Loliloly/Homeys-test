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

function autoAddNotification(type: 'info' | 'success' | 'warning' | 'danger')
{
	if(notifications.value.length > 4)
	{
		notifications.value.shift();
	}
	addNotification("Modal Window", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", type)
}

</script>

<template>
	<main>
		<div class="button-container">
			<button @click="autoAddNotification('info')">
				Add Info Notification
			</button>
			<button @click="autoAddNotification('success')">
				Add Success Notification
			</button>
			<button @click="autoAddNotification('warning')">
				Add Warning Notification
			</button>
			<button @click="autoAddNotification('danger')">
				Add Danger Notification
			</button>
		</div>
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

position: fixed;
bottom: 0;
left: 0;
width: 559px;
height: 808px;
display: flex;
flex-direction: column-reverse;
padding: 10px;

}

.button-container
{
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
gap: 10px;
}

</style>
