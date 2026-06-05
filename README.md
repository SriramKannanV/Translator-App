# 🌐 AI-Powered Text Translator Application

A sleek, modern, and fully responsive text translation application built as part of my Frontend Development internship. The application securely processes English input and translates it into multiple global languages in real-time using a third-party translation engine.

This project emphasizes clean component architecture, scalable global state management, and a highly polished, interactive user interface.

---

## 🎨 UI Design Showcase

The interface is built using a custom design system focused on depth, symmetry, and smooth user flow:

- **Desktop View:** Features a balanced, side-by-side split screen mimicking a natural left-to-right reading flow.
- **Mobile View:** Gracefully refactors into a stacked card layout optimized for mobile viewports.
- **Design Elements:** Utilizes a soft slate background (`slate-50`), floating white cards backed by elegant blurs (`shadow-xl`), dynamic typography gradients, and custom micro-interactions (tactile scaling buttons and clean UI icons).

---

## ⚡ Key Features

- **Real-Time API Translations:** Connects securely to an external Google Translate architecture via **RapidAPI** using asynchronous operations.
- **Global State Management:** Leverages the **React Context API** to safely pass inputs, selected languages, and translated data across isolated UI components.
- **Scalable Data Mapping:** Renders drop-down structures dynamically by parsing standard ISO 639-1 language payloads using JavaScript `.map()`.
- **Robust Input Validation:** Prevents empty requests or missing language choices using robust logic boundaries, accompanied by clear visual ring warnings.
- **Token Security:** Fully separates private access tokens from version control histories using local system environments.
- **One-Click Clipboard Actions:** Implements the native browser Navigator Clipboard API for seamless text copying with inline UX feedback.

---

## 🛠️ Tech Stack

- **Core Framework:** React.js (Functional Components & Hooks)
- **Styling Engine:** Tailwind CSS
- **Global State:** React Context API
- **API Handler:** Native Asynchronous Fetch API
- **Platform Hub:** RapidAPI

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine:

### 1. Clone the Repository

```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
cd YOUR_REPOSITORY_NAME
```
