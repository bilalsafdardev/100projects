To develop an **engineer’s mindset**, you must stop thinking about "syntax" and start thinking about **"State, Logic, and Edge Cases."**

---

### **Part 1: JavaScript Logic (Engineer Mindset)**
*Pushing your limits from logic to data structures.*

#### **Level: Easy (The Foundation)**
1.  **The Multiplier:** Write a function that takes two numbers. If the first is greater than the second, multiply them. If the second is greater, add them. If they are equal, return the string "Equal".
2.  **Array Truth-Finder:** Given an array `[0, 1, false, 2, '', 3]`, write a loop that creates a new array containing **only** the truthy values.
3.  **The "Vowel" Counter:** Ask the user for a string. Count how many vowels (a, e, i, o, u) are in it.
4.  **FizzBuzz (The Classic):** Print numbers 1–50. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For both, "FizzBuzz".

#### **Level: Medium (State Management)**
5.  **The Shopping Cart:** Create an array of objects: `[{name: "Phone", price: 500}, {name: "Case", price: 20}]`. Calculate the total price, then apply a 10% discount if the total is over $100.
6.  **The Unique Filter:** Given `[1, 2, 2, 3, 4, 4, 5]`, return a new array with duplicates removed **without** using `Set`. (Use a loop and an `if`).
7.  **Grade Calculator:** Create an object where keys are subject names and values are marks. Write a function that calculates the average and returns "Pass" if > 50, "Fail" otherwise.
8.  **Password Validator:** Ask for a password. It must be > 8 characters AND contain at least one number. (Hint: Use a loop to check each character of the string).
9.  **The Secret Vault (Closure):** Write a function `createVault(pin)`. It should return an object with a method `getData(providedPin)`. If the pin matches, return "Secret Data". If not, return "Access Denied". The `pin` should not be accessible from outside the vault.
10.  **The "Only Once" Function (HOF):** Write a function `once(fn)`. It should take a function as an argument and return a version of that function that can only be called **one time**. Any subsequent calls should return `undefined`.
11.  **The Smart Calculator (Early Returns):** Write a function `calculate(a, b, operation)`. 
    *   Use **early returns** to handle cases where `a` or `b` are not numbers.
    *   Handle the `operation` ('add', 'subtract', etc.). 
    *   If the operation is 'divide' and `b` is 0, return an error message immediately.
12.  **The Multiplier Factory (HOF/Closure):** Write a function `makeMultiplier(margin)`. It returns a function that takes a number and multiplies it by the margin. 
    *   *Example:* `const triple = makeMultiplier(3); triple(5); // 15`
13.  **The Toggle State (Closure):** Create a function `createToggler()`. It should return a function that, when called, switches a boolean value between `true` and `false` and returns the new state.

#### **Level: Hard (Problem Solving)**
14.  **The Leaderboard:** You have an array of scores `[45, 90, 10, 80, 100]`. Find the **second** highest score without using `.sort()`.
15. **The "Anagram" Checker:** Write a function that checks if two strings are anagrams (e.g., "listen" and "silent").
16. **Frequency Map:** Given a string "apple", return an object showing how many times each letter appears: `{a: 1, p: 2, l: 1, e: 1}`.
17. **Deep Flatten (The Brain Breaker):** Take an array `[1, [2, 3], [[4]]]` and turn it into `[1, 2, 3, 4]`.
18.  **The "Memoizer" (HOF/Closure):** Write a function `memoize(fn)`. It should return a version of `fn` that "remembers" its results. If the function is called with the same argument twice, it should return the cached result instead of re-calculating it.
19.  **Custom `myFilter` (HOF):** Re-create the `.filter()` method from scratch using a `for` loop. Your function `myFilter(arr, callback)` should take an array and a logic function.
20.  **Object Path Picker:** Write a function that takes an object and a string path (e.g., `"user.profile.name"`) and returns the value at that path. If any part of the path is missing, return `undefined` (do not use optional chaining `?.`, write the logic yourself).
21.  **The Task Runner (Closure/Async logic):** Create a function `createTaskQueue()`. It should have an `add(task)` method and a `run()` method. Tasks are functions. `run()` should execute them in the order they were added.
22. **The Deep Comparison:** Write a function `isDeepEqual(obj1, obj2)` that checks if two objects are identical, even if they have nested objects inside them. (Reference types are tricky!).
23. **Array Grouping:** Write a function that groups an array of objects by a specific key. 
    *   Input: `[{type: 'fruit', name: 'apple'}, {type: 'veg', name: 'carrot'}, {type: 'fruit', name: 'pear'}]`
    *   Output: `{ fruit: [...], veg: [...] }`
24. **The "Compose" Function:** Write a function `compose(f, g)`. It should return a function that represents the mathematical composition `f(g(x))`.
25. **Currying:** Write a function `add(a)(b)(c)` that returns the sum of all three numbers. (This is a classic HOF/Closure test).
26. **Balanced Brackets:** Write a function that takes a string of brackets (e.g., `"{[()]}"`) and returns `true` if they are balanced and closed in the right order, `false` otherwise.
27. **The Flatten Object:** Similar to the array flattener, take a nested object `{a: 1, b: {c: 2}}` and turn it into a single-level object: `{"a": 1, "b.c": 2}`.
28. **Find the Intersection:** Write a function that takes two arrays and returns a new array containing only the elements that appear in both.
29. **The Debounce (Engineer Special):** Write a `debounce(fn, delay)` function. It should ensure that `fn` is only executed after `delay` milliseconds have passed since the last time it was called. (Commonly used for search bars).

---

### **Part 2: HTML & CSS (The 80/20 Principle)**
To trigger 80% of your muscle memory, you don't need to memorize every tag. You need to master **Layout (Flex/Grid), The Box Model, and Typography.**

#### **The 20% you need to master:**
*   **HTML:** `div`, `span`, `section`, `main`, `nav`, `form`, `input`, `button`, `img`.
*   **CSS:** `display: flex`, `grid-template-columns`, `position (relative/absolute)`, `box-sizing: border-box`, `Media Queries`.

#### **The Tasks:**
1.  **The "Holy Grail" Layout:** Create a page with a Header, a Main content area with a Sidebar on the left, and a Footer.
    *   *Muscle Memory:* Semantic tags (`header`, `aside`, `main`, `footer`).
2.  **The Centered Card:** Create a card in the exact center of the screen (vertically and horizontally). The card should have an image, a title, a paragraph, and a "Buy Now" button.
    *   *Muscle Memory:* `display: flex`, `justify-content`, `align-items`, `border-radius`, `box-shadow`.
3.  **Responsive Grid:** Create a section with 4 colored boxes. On Desktop, they should be in a row (4 columns). On Tablet, 2 columns. On Mobile, 1 column.
    *   *Muscle Memory:* `display: grid`, `@media (max-width: ...)`.
4.  **The Navigation Bar:** Build a top nav with a Logo on the left and 3 links on the right. When you hover over the links, they should change color and have a smooth transition.
    *   *Muscle Memory:* `justify-content: space-between`, `hover` effects, `transition`.
5.  **The Custom Form:** Build a login form with an email input, password input, and a submit button. Use CSS to make the input borders turn blue when clicked (focused).
    *   *Muscle Memory:* `form`, `input`, `:focus` pseudo-class.

---

### **Part 3: Integrated (JS + HTML + CSS)**
*This is where you become an engineer.*

1.  **The Dark Mode Toggle:**
    *   **HTML:** A button that says "Toggle Dark Mode".
    *   **CSS:** Create a `.dark-theme` class that changes `background-color` to black and `text-color` to white.
    *   **JS:** When the button is clicked, "toggle" that class on the `body` tag.
2.  **The Dynamic List:**
    *   **HTML:** An `input` field and an "Add" button. An empty `ul` below it.
    *   **JS:** When the button is clicked, take the input text and append a new `li` to the `ul`. (Bonus: Clear the input after adding).
3.  **The Character Counter:**
    *   **HTML:** A `textarea`. Below it, a `span` that says "0/50".
    *   **JS:** As the user types, update the span. If they go over 50 characters, make the text red.
4.  **The Modal Popup:**
    *   **HTML:** A "Click Me" button and a hidden `div` (the modal) with an "X" to close it.
    *   **CSS:** Use `position: fixed` and `z-index` to make the modal cover the screen.
    *   **JS:** Show the modal on button click, hide it when "X" is clicked.

---

### **Coach’s Strategy for you:**
*   **Don't over-style.** In the beginning, make it look "okay," but make the **logic** rock solid.
*   **Console.log everything.** If a variable isn't doing what you think, log it.
*   **The "Small Wins" Method:** For Task 2 (Dynamic List), don't try to code the whole thing.
    *   Step 1: Can I get the text from the input and log it?
    *   Step 2: Can I create a new `li` element in JS?
    *   Step 3: Can I attach that `li` to the `ul`?

**Which one are you going to tackle first? Pick one from JS and one from HTML/CSS.**

---

### **Level: Easy (DOM Fundamentals & UI Basics)**
*Goal: Mastering selection, modification, and basic event listening.*

1.  **The Content Swapper:** Create two `div`s with different text. Add a button that, when clicked, swaps the `innerText` of the two `div`s.
2.  **The Attribute Mirror:** Create an `input` field (text) and an `img` tag. As the user types a URL into the input, update the `src` attribute of the image in real-time.
3.  **Class-Based Accordion:** Create a hidden paragraph (`display: none` in CSS). Create a "Read More" button that toggles a `.show` class to make the paragraph visible.
4.  **The List Generator:** Write a function `addItem(text)`. When called, it should create a new `li`, set its text to `text`, and append it to an existing `ul`.
5.  **Hover Detail:** Create a list of items. When the mouse moves over an item, change its background color; when it leaves, change it back (Use `mouseover` and `mouseout`).

---

### **Level: Medium (State Management, Forms & Timers)**
*Goal: Using Closures, Early Returns, and Web APIs for logic.*

6.  **The Live Password Validator:** Create a password input and a message `span`. 
    *   As the user types, check the length. 
    *   If < 8, text is red: "Too short". 
    *   If >= 8, text is green: "Strong enough". 
    *   *Engineer Mindset:* Use an **early return** if the input is empty.
7.  **The "Auto-Save" Field:** Create a `textarea`. Every time the user types, save the content to `localStorage`. When the page refreshes, the text should still be there.
8.  **The Countdown Timer (Intervals):** Create an input where a user enters seconds (e.g., 10). When a "Start" button is clicked, count down to 0 on the screen and then alert "Finished!". Ensure the user cannot click "Start" twice while it's running.
9.  **The "Once" Notification:** Create a function that shows a welcome message on the screen. Use a **Closure** or `localStorage` to ensure this message only ever appears the *very first time* a user visits the site.
10. **The Form Trap:** Create a "Terms and Conditions" checkbox and a "Submit" button. The button should be `disabled` by default. Only enable it when the checkbox is checked.

---

### **Level: Hard (Advanced Engineering & Integration)**
*Goal: Optimization, Persistence, and Complex Data Architectures.*

11. **The Persistent Todo App (JSON + Storage):** 
    *   Build a list where users can add and delete items. 
    *   **The Catch:** Store the entire list as an array in `localStorage`. 
    *   When an item is deleted, you must update the array, stringify it, and re-save it.
12. **The Search Debouncer (Performance):** Create a search input. Write a function that console logs "Fetching results..." only **500ms after** the user has stopped typing. (This prevents calling an API on every single keystroke).
13. **Event Delegation Menu:** Create a `ul` with 100 `li` items. Instead of adding 100 event listeners, add **one** listener to the `ul` that detects which `li` was clicked using `event.target`.
14. **The Modal Manager (State):** Create a modal popup. 
    *   It should open when a button is clicked. 
    *   It should close if the user clicks the "X" button **OR** if they click the darkened background outside the modal.
15. **The Progress Bar (Async Simulation):** Create a "Download" button. When clicked, a progress bar `div` should fill from 0% to 100% over 5 seconds. Use `setInterval`. If the user clicks "Cancel", the interval must be cleared immediately.
16. **Deep Cloning State:** Create an object in `localStorage` representing user settings: `{theme: "dark", notifications: {email: true, sms: false}}`. Write a script that retrieves this, changes `sms` to `true` without mutating the original variable, and saves it back.

---