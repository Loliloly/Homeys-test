<script setup lang="ts">

// Using props to manage differents notifications.
const props = defineProps({title: { type: String, required: true}, text: { type: String, required: true}})

</script>

<template>

	<div class="notification-info" >
		<div class="notification-header">
			<img src="./assets/icons/Info.svg" class="notification-icon"/>
			<h1 class="notification-title">{{props.title}}</h1>
			<img src="./assets/icons/X.svg" class="notification-close-button"/>
		</div>
		<div class="notification-body">
			<p class="notification-text">{{props.text}}</p>
		</div>
	</div>

</template>

<style scoped>


/* CSS copied from Figma*/


.notification-info
{
/* Property 1=Info */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;

padding: 24px;
gap: 8px;

margin-right: auto;
margin-left: auto;
margin-bottom: 10px;
width: 527px;
height: 160px;



/* Info/Secondary

B9C5E5
*/
background: #E4E9F7;
/* Info / Border

96A8D8
*/
border: 2px solid #96A8D8;
/* Shadow / 6 */
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
border-radius: 16px;
}

.notification-header
{
/* Modal Header */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;

width: 479px;
height: 32px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}

.notification-icon
{
/* Phosphor Icons / Info */

width: 32px;
height: 32px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
}

.notification-title
{
/* Modal Window */

width: 395px;
height: 28px;

/* Headingnotification- Text/DM/20/Medium/Medium */
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 28px;
/* identical to box height, or 140% */

/* Grey_02 / 90 */
color: #424242;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;

}

.notification-close-button
{
/* Phosphor Icons / X */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;

}

.notification-body
{
/* Frame 1 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px 0px 48px;

width: 479px;
height: 72px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}

.notification-text
{
/* Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor */

width: 431px;
height: 72px;

/* Body Text/DM/16/Regular/24 */
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

/* Grey_02 / 70 */
color: #757575;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;

}

</style>

