import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Notification
{
	title: string;
	text: string;
	type: 'info' | 'success' | 'warning' | 'danger';
	id: number;
}

export const useNotificationStore = defineStore('notification', () =>
{
	const notifications = ref<Notification[]>([]);
	let notifId = ref(0);

	function addNotification(title: string, text: string, type: 'info' | 'success' | 'warning' | 'danger')
	{
		notifications.value.push({ title, text, type, id: notifId.value });
		notifId.value++;
	}
	
	function removeNotification(index: number)
	{
		notifications.value.splice(index, 1);
	}
	
	function getAllNotifications()
	{
		return notifications.value;
	}

	function getNotificationById(id: number)
	{
		return notifications.value.find((notification: Notification) => notification.id === id) || null;
	}

	return { notifications, addNotification, removeNotification, getAllNotifications, getNotificationById };
});