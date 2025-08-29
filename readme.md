

- 📂 **GitHub Repository = https://github.com/Eshrat48/B12-A5-Emergency-Hotline**
- 🌐 **Live Link = https://eshrat48.github.io/B12-A5-Emergency-Hotline/**


### Answer to the following questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   getElementById use when the unique id of an element is known. Because of the unique id it only gives one element.
   If more than one elements share the same class name then getElementsByClassName is used. But this returns a kind of list, not a single element.
   querySelector uses the CSS selectors. So this is more flexible. This only gives the first element that matches the selector.
   querySelectorAll gives all the elements that match the selector in a list.
   
2. How do you **create and insert a new element into the DOM**?

   document.createElement() is used to make a new element. For example, document.createElement("div") makes an empty <div>. Then we can put some text in it using .textContent = "Hello". Finally, we place it on the page by attaching it to something that already exists, like document.body.appendChild(div).

3. What is **Event Bubbling** and how does it work?

   When we click on something, the event doesn’t stop there. It also goes up to the element’s parents. For example, if a button is inside a box and we click the button,
   first the button gets the click. Then the box also gets it. After that the body and finally the whole page. The event goes upward step by step just like bubbles rising
   in water. That's why this is called event bubbling.
   
4. What is **Event Delegation** in JavaScript? Why is it useful?

  Event delegation is a technique where we don't attach event listeners to every individual child element. Instead of this we attach a single event listener to the parent element. When a child element is clicked the event bubbles up to the parent and the parent determines which child triggered the event. This process saves code, improves performance and works even for dynamically added elements because the parent will still handle their events.
   
5. What is the difference between **preventDefault() and stopPropagation()** methods?

  preventDefault() is used to stop the default action of an element. For example, clicking a link normally opens a new page. But if preventDefault() is used the page will not open. 
  stopPropagation() use to stop the event from bubbling up to parent elements. For example, if a button inside a box is clicked normally both the button and the box handle the click. But with stopPropagation() only the button handles it and the box does not.

