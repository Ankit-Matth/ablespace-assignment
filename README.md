# Product Data Explorer

This is a full-stack application that allows users to explore products from [World of Books](https://www.worldofbooks.com/) through a clean and modern interface. The application scrapes data on-demand, providing users with live information from the website.

Live link - https://ablespace-assignment-frontend.vercel.app/

## Tech Stack

| Category      | Technology                                                                                             |
| :------------ | :----------------------------------------------------------------------------------------------------- |
| **Frontend**  | [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/) |
| **Backend**   | [NestJS](https://nestjs.com/), [Playwright](https://playwright.dev/)                                     |
| **Database**  | [MongoDB](https://www.mongodb.com/) (or other, depending on configuration)                               |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com/)                                                               |

***

## Project Structure

```
product-data-explorer/
├── frontend/            # Next.js frontend
│   ├── public/         # Static assets
│   ├── src/            # App source (app/, components/)
│   └── package.json    # Frontend dependencies
├── backend/             # NestJS backend
│   ├── src/            # Backend source (crawler/, modules/)
│   └── package.json    # Backend dependencies
└── README.md           # Project documentation
```

***

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or higher)
*   [npm](https://www.npmjs.com/)
*   [Git](https://git-scm.com/)

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Ankit-Matth/ablespace-assignment.git
    cd ablespace-assignment
    ```

2.  **Setup the Backend:**

    ```bash
    cd backend
    npm install
    ```

3.  **Setup the Frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

4.  **Start the Backend:**

    ```bash
    cd backend
    npm run start:dev
    ```

    The backend will be running on `http://localhost:5000`.

5.  **Start the Frontend:**

    ```bash
    cd ../frontend
    npm run dev
    ```

    The frontend will be running on `http://localhost:3000`.


## Note

This project was developed as a 7-day assignment to demonstrate proficiency in web scraping and full-stack development. While the core functionalities are in place, some features may not be at a production-ready level. However, the foundation is solid, and with more time, it can be extended into a more robust and feature-rich application.
