# E-commerce Sales Chatbot - Front End

This project is a **front-end implementation** of an interactive chatbot designed for an e-commerce platform. The chatbot allows users to simulate product searches and receive mock responses, enhancing the shopping experience with a clean, responsive, and dynamic interface.

---

## Features

- **Interactive Chat UI**: Users can type queries, send messages, and receive responses.
- **Responsive Design**: Fully compatible with desktop, tablet, and mobile devices.
- **Session Management**: Chat history persists using local storage, even after page reloads.
- **Mock Product Responses**: Predefined product data simulates the chatbot's responses.
- **Conversation Reset**: Users can clear the chat window and start fresh.

---

## Tech Stack

- **Framework**: React.js
- **Styling**: styled-components
- **State Management**: React Hooks (useState, useEffect)

---

## Setup Instructions

Follow these steps to run the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Not-Secret-Dev/ecommerce-sales-chatbot.git
   cd ecommerce-sales-chatbot
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Project**:
   ```bash
   npm run dev
   ```
   The project will run at `http://localhost:5173`.

---

## Project Structure

```
Ecommerce-Sales-Chatbot/
├── public/                # Static files
│   └── undo.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Chatbot/
│   │   │   └── ChatbotComponent.jsx
│   │   ├── Footer/
│   │   │   └── FooterComponent.jsx
│   │   ├── Header/
│   │   │   └── HeaderComponent.jsx
│   │   ├── Inputs/
│   │   │   └── InputComponent.jsx
│   │   └── Main/
│   │       └── MainComponent.jsx
│   ├── App.jsx            # App entry point
│   ├── index.css          # Global CSS
│   ├── main.jsx           # React DOM render
│   └── mockData.js        # Predefined product data
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESlint config file
├── index.html             # Index.html
├── package.json           # Project dependencies
├── README.md              # Documentation / README file
└── vite.config.js         # Vite configuration file
```

---

## Mock Data

The chatbot replies are powered by hardcoded mock data in `mockData.js`:

```javascript
export const mockResponses = {
  "books under $20": ["Atomic Habits", "The Alchemist", "Harry Potter 1"],
  electronics: [
    "Wireless Mouse",
    "Mechanical Keyboard",
    "Bluetooth Headphones",
  ],
  textiles: ["Cotton T-shirt", "Silk Scarf", "Denim Jacket"],
};
```

## Future Improvements

- Connect to a real backend API for dynamic product responses.
- Add user authentication for personalized recommendations.
- Implement advanced message features like filters and pagination.

---

## License

This project is open-source and available under the [MIT License](./LICENSE).

---

## Author

Aayan Mumtaz

- GitHub: [Not-Secret-Dev](https://github.com/Not-Secret-Dev)

Feel free to contribute or fork this project! 🚀
