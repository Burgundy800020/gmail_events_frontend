# Gmail Events (Frontend)

A modern, intuitive web interface for visualizing and managing events automatically extracted from your Gmail inbox. This project is the **frontend companion** to the [Gmail Events (backend)](https://github.com/Burgundy800020/gmail_events), which uses LLM's to scan your emails, extract event details, and make them available via a robust API.

---

## What is Gmail Events?

**Gmail Events** is an intelligent automation tool that leverages LLM's to scan your Gmail inbox, extract structured event information (title, date, time, location, items to bring), and seamlessly present it in a user-friendly calendar view. Never miss an important meeting, appointment, or social event buried in your inbox again!

This repository provides the **React-based frontend** for the system, allowing you to:
- Instantly view your upcoming events in a weekly calendar.
- See all extracted details (name, time, location, items to bring) at a glance.
- Enjoy a clean, responsive, and modern UI.

---

## Requirements

- **React 19** – Component-based UI
- **React Big Calendar** – Interactive calendar display
- **Axios** – HTTP client for API communication
- **Moment.js** – Date/time formatting
- **Jest & React Testing Library** – Reliable unit testing
- **Create React App** – Hassle-free project setup and build

---

## Prerequisites

- **Node.js** (v16+ recommended)
- **npm** (v8+ recommended)
- A running instance of the [Gmail Events backend](https://github.com/Burgundy800020/gmail_events) (see backend README for setup)

---

## Getting Started

1. **Clone this repository:**
   ```bash
   git clone https://github.com/yourusername/gmail_events_frontend.git
   cd gmail_events_frontend/gmail_events
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure backend connection:**
   - Update the `BACKEND_BASE_URL` in `src/api.js`.

4. **Start the development server:**
   ```bash
   npm start
   ```

---

##  Features

- **Automatic Event Display:**
  - Fetches events from the backend and displays them in a weekly calendar.
  - Each event shows name, time, location, and items to bring.
- **Live Updates:**
  - Events are loaded on page refresh; backend updates are reflected instantly.
- **Responsive Design:**
  - Works great on desktop and mobile browsers.
- **Easy Integration:**
  - Connects seamlessly to the [Gmail Events backend](https://github.com/Burgundy800020/gmail_events).

---

---

## Contributing

For contributions, issues, and feature requests, please open an issue or submit a pull request.

---

## License

MIT License.

---

## 📢 Acknowledgements
- [Gmail Events backend](https://github.com/Burgundy800020/gmail_events)
