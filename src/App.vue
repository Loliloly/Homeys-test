<script setup lang="ts">
import BaseNotification from './BaseNotification.vue';
import { useNotificationStore } from '@/stores/notificationStore';
import { ref } from 'vue'

const notificationStore = useNotificationStore();


function autoAddNotification(type: 'info' | 'success' | 'warning' | 'danger')
{
	if(notificationStore.notifications.length > 4)
	{
		notificationStore.removeNotification(0);
	}
	notificationStore.addNotification("Modal Window", "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", type)
	/* Tests getters
	console.log(notificationStore.getAllNotifications());
	console.log(notificationStore.getNotificationById(0));
	*/
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
			<div v-for="(notif, index) in notificationStore.getAllNotifications().slice().reverse()" :key="notif.id">
				<BaseNotification :title="notif.title" :text="notif.text" :type= "notif.type" @close="notificationStore.removeNotification(notificationStore.getAllNotifications().length - 1 - index)" />
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
