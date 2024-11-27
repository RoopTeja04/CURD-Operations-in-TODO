# TODO List Application

A simple and responsive TODO List application built with React.js, allowing users to add, update, and delete tasks. It uses local storage to persist data across sessions.

## Features

- **Add Notes:** Users can add tasks to the TODO list.
- **Update Notes:** Edit existing tasks directly from the list.
- **Delete Notes:** Remove tasks from the list.
- **Local Storage:** Tasks are saved in the browser's local storage, ensuring persistence after page reloads.
- **Dynamic Buttons:** The "Submit" button dynamically switches between Add and Update based on the current operation.

## Tech Stack

- **Frontend Framework:** React.js
- **Icons:** React Icons
- **Styling:** CSS

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
2. Install dependencies:
    ```bash
    npm install
3. Run the application:

    ```bash
    npm start
4. Run the application: `http://localhost:3000`.

# Usage
1. Add a Task:

    - Enter a task in the input field.
    - Click the "Add" icon (+) to save the task.
2. Update a Task:

    - Click the "Update" button next to a task.
    - Modify the task in the input field and click the "Update" icon.
3. Delete a Task:

    - Click the "Delete" button next to a task to remove it.

# Project Structure

    ```bash
    src/
    ├── components/
    │   └── App.js          # Main application component
    ├── index.js            # Entry point
    ├── App.css             # Stylesheet for the app
    └── index.css           # Global styles


# Local Storage
Tasks are saved under the key `TODO` in the browser's local storage. This ensures that tasks persist across sessions.

# Acknowledgments
* Built with ❤️ using React.js.
* Icon support by React Icons.

*Project Done By*

# Roop Teja G