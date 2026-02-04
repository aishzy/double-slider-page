<img width="1419" height="854" alt="image" src="https://github.com/user-attachments/assets/c0ef9224-87d7-448d-9ccd-a0125b881b58" />


## Double Slider Login & Registration Page 

This project demonstrates a double slider authentication UI using HTML, CSS and JavaScript. The login and registration forms share the same page and switch visibility using a sliding animation instead of page reloads. 

The animation and layout are handled by CSS, while JavaScript is only used to toggle the UI state.

## How It Works
- Both login and Registration forms exist in the DOM at the same time.
- Only one form is visible at a time.
- A CSS class is toggled to control which form is active.
- CSS handles all animations using 'transform' and 'transition'.
- JavaScript only switches states, not animations.

## HTML Structure 

The HTML consists of: 
- A main container
- Two form section (Login and Register)
- An overlay panel with buttons to switch modes

Key Idea: 
The forms are not dynamically created or removed. Instead, they are positioned side-by-side and moved in and out of view.

## CSS Logic

CSS is responsible for: 
- layout
- Visibility
- Sliding animations

Positioning: 
- The container is set to 'position: relative'
- Both forms are set to 'position: absolute'
- One form starts on screen
- The other starts outside the viewport using 'translateX()'

## Why This Approach Is Used

Advantages 
- Single page UI
- No page reload
- Modern and smooth user experience
- Clean separation of responsibilities (HTML, CSS, JS)

Considerations
- Requires responsive design for mobile screens
- Needs accessibility support (focus handling, screen readers)
- Overuse can harm usability if not designed carefully
