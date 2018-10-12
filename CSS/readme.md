# What can be transitioned?
* See here for list: 
	https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties 

# What should be transitioned? (What performs best?)
* transform: translate();
* transform: scale();
* transform: rotate();
* opacity;

# Transitions & Keyframes
* Transitions allow us to animate a single state change.
* Transitions go from state A to state B

* Keyframes allow for much more complex multi-state animations
* Keyframes go from state A to state B to state C...

# Keyframes
* Usual suspects
	animation-name				: rainbowtext;
	animation-duration			: 1s;
	animation-timing-function   : linear;
	animation-delay				: 0s;

* Newer animation properties
	animation-interation-count	: infinite;
		How many times should it repeat?

	animation-fill-mode			: forwards; backwards; both; none;
		How animation should apply styles before and after

	animation-direction			:forward; reverse; alternate;
		Set direction of animation

	animation-play-state		:paused; running;
		Whether animation is running or paused

# Shorthand Animations
* animation: 3s ease-in 1s 2 reverse both paused slidein;
	duration | timing-function | delay | interation-count | direction | fill-mode | play-state | name
* animation: changecolor 3s linear 1s infinite'
* animation: jiggle 4s;

# FLEXBOX
* What is Flexbox?
	It's a more efficient way to lay out, align and distribute space among items in a container (even if their size is unknown).

# Container Properties
*	FLEX-DIRECTION	
	specifies how items are placed in the flex container, defining the main axis and its direction

	row;			default left-right
	row-reverse;	right-left
	column;			top-bottom
	column-reverse;	bottom-top

*	JUSTIFY-CONTENT
	defines how space is distributed between items in flex container along the main axis

	flex-start; 	left side
	flex-end; 		right side
	center; 		centers content
	space-between; 	add space between items
	space-around; 	add space around items

*	FLEX-WRAP
	specifies whether items are forced into a single line OR can be wrapped into multiple lines

	nowrap;			default	
	wrap;			wraps items in container top-bottom
	wrap-reverse;	wraps items in bottom-top

*	ALIGN-ITEMS
	defines how space is distributed between items in flex container along cross axis

	stretch; 	default value
	flex-start; top bottom
	flex-end; 	bottom top
	center; 	centers content
	baseline;	align items based on baseline

*	ALIGN-CONTENT
	defines how space is distributed BETWEEN ROWS in flex container along the cross axis

	flex-start; 	pushes everything up
	flex-end; 		pushes everything down
	space-between; 	space between rows
	space-around; 	space around rows
	center; 		centers rows

# Flex Item Properties
*	ORDER	
	specifies the order used to lay out items in their flex container
	everything has order of 0 by default

	-1; push element to start
	1;	push element to end	

*	FLEX
	defines how a flex item will grow or shrink to fit the available space in a container (shorthand for 3 other properties)

	flex: 1 1 200px;

*	FLEX-GROW
	dictates how the unused space should be spread amongst flex items

	flex-grow: 1;	make all boxes share space evenly

*	FLEX-SHRINK
	dictates how items should shrink when there isn't enough space in container

	flex-shrink: 1; default (all shrink at same rate)
	flex-shrink: 0; item does not shrink
	flex-shrink: 2; item shrinks quicker than others

*	FLEX-BASIS
	specifies the ideal size of a flex item BEFORE it's placed into a flex container

	flex-basis: 350px;


*	ALIGN-SELF
	allows you to override align-items on individual flex items

	flex-start; aligns single item to start of cross axis
	flex-end; 	aligns single item to end of cross axis
	stretch; 	stretches single item along cross axis