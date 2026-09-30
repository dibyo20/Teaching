# 🎓 React `useState` Task — Student Grace Marks

## 📌 Problem Statement

Create a React application using **`useState`** to manage an array containing the marks of multiple students.

The application should allow the user to give **5 grace marks** to students who have not passed yet.

The passing mark is **25**.

---

## 📝 Requirements

- Store the students' marks using `useState`.
- Use the following initial marks:

```js
[45, 30, 20, 15, 10]
```

- Display each student's:
  - Student number
  - Marks
  - Pass/Fail status

- A student **passes** if their marks are **25 or above**.
- A student **fails** if their marks are **below 25**.
- Add a **"Give them grace"** button.
- Whenever the button is clicked:
  - Add **5 marks** to every student who has failed.
  - Students who have already passed should not receive additional marks.
- Continue giving grace marks until **all students pass**.
- Once a student has passed, their marks should remain unchanged.
- Once everyone has passed, clicking the button should not increase anyone's marks further.
- Use `map()` to create the updated marks array.
- Update the state using `setMarks()`.

---

## 💡 Expected Behavior

### Initial State

```text
Student 1 = 45 → Pass
Student 2 = 30 → Pass
Student 3 = 20 → Fail
Student 4 = 15 → Fail
Student 5 = 10 → Fail
```

### After 1st Click

```text
Student 1 = 45 → Pass
Student 2 = 30 → Pass
Student 3 = 25 → Pass
Student 4 = 20 → Fail
Student 5 = 15 → Fail
```

### After 2nd Click

```text
Student 1 = 45 → Pass
Student 2 = 30 → Pass
Student 3 = 25 → Pass
Student 4 = 25 → Pass
Student 5 = 20 → Fail
```

### After 3rd Click

```text
Student 1 = 45 → Pass
Student 2 = 30 → Pass
Student 3 = 25 → Pass
Student 4 = 25 → Pass
Student 5 = 25 → Pass
```

At this point, **all students have passed** and further button clicks should not change their marks.

---

## 🎯 Concepts Practiced

- `useState`
- Array state
- `map()`
- Conditional rendering
- Event handling
- Updating state immutably
- Working with derived state
- Conditional state updates

---

## 🚫 Constraints

- Do not directly modify the existing `marks` array.
- Use `map()` to create the new array.
- Use `setMarks()` to update the state.
- Do not use another state variable to track whether students have passed.