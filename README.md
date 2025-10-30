# 🗓️ Daily Planner Project

## 📖 Overview

This is a simple **JavaScript Daily Planner** that allows users to add and delete tasks.  
It was built to practice DOM manipulation, event listeners, and basic logic in JavaScript.

## 💡 Features

- Add a new task.
- Delete a specific task.
- Display an error message when no input is provided.

## 🧠 My Logic

1. The HTML provides a text input, a button, and a list container.
2. JavaScript listens for a click on the “Add Task” button.
3. When clicked:
   - The code checks if the input field is empty.
   - If empty, it shows a message asking the user to enter a task.
   - Otherwise:
     - It creates a new `<li>` element with the task text.
     - Adds a ❌ delete button beside it.
     - Appends both to the task list.
4. Clicking the ❌ button removes that task from the list.

---

## 🧾 Explanation of My JavaScript Code

**Step 1:**  
I used `document.getElementById()` to connect my JavaScript file with elements from the HTML (the input field, add button, message area, and task list). This allows my script to access and modify them directly.

**Step 2:**  
I added an event listener to the “Add Task” button so that when it’s clicked, it runs a function that handles adding tasks.

**Step 3:**  
Inside that function, I retrieved the user’s input value and removed any extra spaces using `.trim()`.

If the input is empty, I displayed a validation message (“Please enter a task.”) inside the message paragraph using `textContent` and stopped the function with `return`.

**Step 4:**  
When the input is valid, I cleared the message and the input box to prepare for the next task.

**Step 5:**  
I created a new `<li>` element dynamically using `document.createElement("li")` and set its `textContent` to the task input.

**Step 6:**  
I created a delete button using `document.createElement("button")`, set its text to the ❌ emoji, and added a CSS class for styling.

**Step 7:**  
I attached another event listener to the delete button so that when it’s clicked, it removes the specific task using `taskItem.remove()`.

**Step 8:**  
Finally, I used `appendChild()` to add the delete button to each task item and then add each task item to the task list in the DOM.

---

## 🚀 Future Improvements

- Add a "mark as completed" feature.
- Save tasks to local storage.
- Add a clear-all button.
- Style it better for mobile view.

## 👩‍💻 Author

**Oluwatunmise Adewole**
