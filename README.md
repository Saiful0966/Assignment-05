Dev Stack

Project Description

Dev Stack is a modern and interactive web application designed for developers to explore, compare, and select popular software technologies to build their ideal tech stack efficiently.

Technologies Used
React.js (TypeScript)
Tailwind CSS 
React-Toastify
data.json



 React Questions & Answers

1. What is JSX, and why is it used in React?
JSX is a HTML-like syntax inside JavaScript. It is used to easily build UI structures using HTML and JavaScript together.

2. What is the difference between props and state?
Props pass read-only data from parent to child, while state is internal component data that changes over time to update UI.

3. What does the `useState` hook do, and where did you use it in this project?
`useState` manages local dynamic data. In this project, I used it to hold technologies, selected stack items, and loading states.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side-effects like data fetching. I used it to fetch initial data from `/data.json` when the page loads.

5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React track which items changed, added, or removed so it can update only those specific elements efficiently.

6. What is conditional rendering? Show one place you used it.
Conditional rendering renders UI based on conditions. I used `stack.length === 0` to show an empty state message when no items are selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent passes data to child via props. Child sends data to parent by calling a callback function passed down as a prop.