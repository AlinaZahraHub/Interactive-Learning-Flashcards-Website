Interactive Learning Flashcards

A dynamic, state-driven flashcard application built to master DOM manipulation and user interaction patterns. This project was developed as part of industrial training to implement clean, secure, and decoupled JavaScript code.

Overview
This application serves as a dynamic learning engine. It moves beyond static web pages by utilizing an IPO (Input-Process-Output) architectural loop to handle real-time UI updates without page refreshes.

Features

Dynamic Content Engine: Switch between different learning categories (Kids, Maths, Coding) instantly.

State-Driven UI: Managed via strict variable integrity (const/let) and state toggles.

Secure Implementation: Prioritizes textContent over innerHTML to prevent XSS vulnerabilities.

Gamified Experience: Includes custom audio celebration triggers and interactive animation logic.

Responsive Design: Optimized for seamless interaction across all device sizes.

Engineering Standards

Decoupled Architecture: Used js- prefixes for DOM selectors and is- prefixes for state changes to separate logic from presentation.

IPO Standards: Built with a clear input-process-output flow for predictable and scalable code.

Project Structure

index.html: Main structure with semantic tags.

style.css: Modular styling for themes and responsive layouts.

script.js: The core logic engine driving the state and interactivity.

Built With

HTML5

CSS3 (Flexbox/Grid)

Vanilla JavaScript (ES6+)
