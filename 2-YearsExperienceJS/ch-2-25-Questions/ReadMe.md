# JavaScript / HTML / CSS / ReactJS / Redux Interview Questions (2.5 Years)

## 1. Why do we use `<!DOCTYPE>` in HTML?

`<!DOCTYPE>` tells the browser which HTML version to use. In HTML5 (`<!DOCTYPE html>`), it ensures the page is rendered in **standards mode** instead of quirks mode.

---

## 2. What is the use of the `<head>` tag?

The `<head>` tag contains **metadata** about the document such as title, character encoding, linked CSS, JavaScript files, and meta tags. It does not display content on the page.

---

## 3. Where should the `<script>` tag be placed: `<head>` or `<body>`?

- **Best practice**: Place scripts at the **end of the `<body>`** so the HTML renders first and the page loads faster.
- If placed in `<head>`, use `defer` or `async` to avoid blocking rendering.

---

## 4. What is the use of `defer` and `async` attributes in `<script>`?

- **`async`**: Script downloads in parallel and executes immediately after download. Execution order is **not guaranteed**. Best for independent scripts (e.g., analytics).
- **`defer`**: Script downloads in parallel but executes **after the HTML is fully parsed**, in the order they appear. Best for DOM-dependent scripts.

---

## 5. Can we create custom elements like `<ashu>` in HTML?

Yes, using the **Web Components API** with `customElements.define()`.

---

```javascript
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Custom Element Example</title>
    </head>
    <body>

    <!-- Using custom element -->
    <ashu-element></ashu-element>

    <script>
        // Define a new class extending HTMLElement
        class AshuElement extends HTMLElement {
        connectedCallback() {
            this.innerHTML = "<h2>Hello from <b>&lt;ashu-element&gt;</b>!</h2>";
        }
        }

        // Register the custom element
        customElements.define("ashu-element", AshuElement);
    </script>

    </body>
    </html>

```

## 6. What is the difference between inline and block elements?

- **Inline**: Flows within text, width = content.
- **Block**: Starts on new line, width = full available.

---

## 7. What is the display property in images?

`<img>` elements are **inline-block** by default.

---

## 8. What is the CSS Box Model?

It defines element layout as **content + padding + border + margin**.

---

# JAVASCRIPT QUESTIONS?

## 9. What are different data types in JS?
JavaScript has 8 data types:  
- **Primitive**: string, number, boolean, null, undefined, bigint, symbol  
- **Non-primitive**: object, array

## 10. Have you familiar with class in JS?
Yes, `class` in JS is a **syntactic sugar over constructor functions** used to create objects.

---

## 11. What is the type of class in JS and how we can check?
A class is of type **function**; check with `typeof MyClass // "function"`.

---

## 12. What is the type of Object and how we can check?
An object is of type **object**; check with `typeof {}` or `typeof new Object() // "object"`.

---

## 13. What is the type of an Array and how we can check?
An array is of type **object**; check with `Array.isArray([]) // true`.

## 14. what are promises?
promise is an object which represents the eventually complition of an asynchpnous javscript. it has three phase.
pending.
fullfil.
resolved.

## 15. Do you know modules in ES6 in JS?
  import and export.

## 16. how to do use module in JS and HTML?
 <script src="./app.js" type="module"></script>

 ## 17. 



