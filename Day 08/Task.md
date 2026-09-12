# 📋 Day 08 Task: Multiplication Table Generator

## 🎯 Task Description
Build a web application that takes any number entered by the user and displays its complete, properly formatted multiplication table (from 1 to 10).

---

## 📌 Requirements

### 1. User Interface
- A clean, centered layout with a clear heading.
- An input box where the user can enter a number.
- A button to generate the table.
- A reset/clear button to wipe the inputs and results.
- A structured area where the multiplication table is displayed clearly in rows.
- A visible area for displaying error messages when input is invalid.

### 2. Behavior & Functionality
- When the user submits a number, the application should display the full table for that number up to 10 (e.g., `N × 1 = ...` through `N × 10 = ...`).
- Generating a new table must replace the old table rather than appending underneath it.
- Clearing/resetting must remove the existing table and clear the input field.

### 3. Input Handling & Validations
The application must handle all inputs properly and display appropriate error messages when necessary:
- **Empty input**: Do not generate an empty table; inform the user to enter a number.
- **Invalid characters / Non-numbers**: Prevent or handle invalid submissions gracefully without breaking the application.
- **Negative numbers & Decimals**: Should calculate and display accurately.
- **Zero**: Should correctly compute and display zero multiples.

---

## 💡 Example Output

If the user enters `7`:

| Multiplier Expression | Result |
| :---: | :---: |
| 7 × 1 | 7 |
| 7 × 2 | 14 |
| 7 × 3 | 21 |
| 7 × 4 | 28 |
| 7 × 5 | 35 |
| 7 × 6 | 42 |
| 7 × 7 | 49 |
| 7 × 8 | 56 |
| 7 × 9 | 63 |
| 7 × 10 | 70 |
