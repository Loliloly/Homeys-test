<script setup lang="ts">

import InfoIcon from '@/assets/icons/Info.svg';
import SuccessIcon from '@/assets/icons/CheckCircle.svg';
import WarningIcon from '@/assets/icons/Warning.svg';
import DangerIcon from '@/assets/icons/Danger.svg';

// Using props to manage differents notifications.
const props = defineProps({
	title: { type: String, required: true}, 
	text: { type: String, required: true},
	type: { type: String, required: true}
})

// Informations mapping
const notificationConfig = {
  info: {
    icon: InfoIcon,
    class: 'color-info'
  },
  success: {
    icon: SuccessIcon,
    class: 'color-success'
  },
  warning: {
    icon: WarningIcon,
    class: 'color-warning'
  },
  danger: {
    icon: DangerIcon,
    class: 'color-danger'
  }
};

// Default value = info
const currentConfig = notificationConfig[props.type] || notificationConfig.info;
</script>

<template>

	<div :class="['notification-base', currentConfig.class]" >
		<div class="notification-header">
			<img :src="currentConfig.icon" class="notification-icon" alt="Notification Icon"/>
			<h1 class="notification-title">{{props.title}}</h1>
			<img src="./assets/icons/X.svg" class="notification-close-button" alt="Close"/>
		</div>
		<div :class="['notification-body', currentConfig.class]">
			<p class="notification-text">{{props.text}}</p>
		</div>
	</div>
</template>

<style scoped>


/* CSS copied from Figma*/


.notification-base
{

box-sizing: border-box;


display: flex;
flex-direction: column;

padding: 24px;
gap: 8px;

margin-right: auto;
margin-left: auto;
margin-bottom: 10px;
width: 527px;
height: 160px;


border: 2px solid #96A8D8;

box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
border-radius: 16px;
}

.color-info
{
	background: #E4E9F7;
}

.color-success
{
	background: #E4F7E8;
}

.color-warning
{
	background: #F7F2E4;
}

.color-danger
{
	background: #F7E4E4;
}

.notification-header
{
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;

width: 479px;
height: 32px;


flex: none;
order: 0;
flex-grow: 0;
}

.notification-icon
{

width: 32px;
height: 32px;


flex: none;
order: 0;
flex-grow: 0;
}

.notification-title
{

width: 395px;
height: 28px;


font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 28px;


color: #424242;


flex: none;
order: 1;
flex-grow: 1;
}

.notification-close-button
{

width: 20px;
height: 20px;

flex: none;
order: 2;
flex-grow: 0;
}

.notification-body
{

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px 0px 48px;

width: 479px;
height: 72px;

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}

.notification-text
{

width: 431px;
height: 72px;


font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

color: #757575;


flex: none;
order: 0;
flex-grow: 1;

}

</style>

