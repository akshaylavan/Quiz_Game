# Quiz Application

This project is a simple quiz application built with React. The quiz presents multiple-choice questions to the user, tracks the score, and displays the final score at the end. It also includes a timer for each question, adding a time-based challenge to the quiz.

## Features

- Multiple-choice questions
- Timer for each question (15 seconds)
- Score tracking
- Option to restart the quiz

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/akshaylavan/Quiz_Game.git
    cd quiz-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

- `src/`
  - `components/`
    - `Quiz.js`: The main component of the quiz application
  - `data/`
    - `Question.json`: Contains the questions, options, and correct answers for the quiz

## Usage

- The application starts with the first question displayed and a timer set to 15 seconds.
- Select an answer by clicking on one of the options.
- If the selected option is correct, the score is incremented.
- Once an answer is selected or the timer runs out, the next question is displayed.
- After the last question, the final score is shown with an option to restart the quiz.

## JSON Structure

The `Question.json` file should have the following structure:

```json
[
  {
    "question": "What is the capital of France?",
    "options": ["Paris", "London", "Rome", "Berlin"],
    "correctOption": "Paris"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Earth", "Mars", "Jupiter", "Saturn"],
    "correctOption": "Mars"
  }
  ...
]
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

---

Feel free to customize this README file according to your project's requirements and structure.
