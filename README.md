# Portfolio Website

This is a portfolio website showcasing personal and professional details, built using **Next.js**, **Tailwind CSS**, and **TypeScript**. The project is designed to be responsive and visually appealing, with a focus on modular and reusable components.

## Features

- **About Section**: Highlights education and current role.
- **Responsive Design**: Built with Tailwind CSS for a mobile-first approach.
- **Reusable Components**: Modular components for easy customization.
- **Dark/Light Mode**: Theme toggle functionality.
- **TypeScript Support**: Strongly typed codebase for better developer experience.

## Project Structure

```
.
├── app/                     # Next.js app directory
├── components/              # Reusable React components
│   ├── about.tsx            # About section component
│   ├── ui/                  # UI components (e.g., Card, Button)
├── public/                  # Public assets (e.g., images, fonts)
├── styles/                  # Global styles
├── .next/                   # Next.js build output
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.mjs          # Next.js configuration
```

## About Section

The `About` section highlights:

- **Education**:
  - **Institution**: Kalinga Institute of Industrial Technology (KIIT)
  - **Degree**: B.Tech in Computer Science Engineering
  - **Duration**: 2018 - 2022
  - **CGPA**: 9.60/10.0
- **Current Role**:
  - **Position**: Software Development Engineer at JUSPAY
  - **Responsibilities**:
    - Leading development of Hyperswitch Web SDK and merchant dashboard.
    - Working on payment infrastructure, AWS deployments, and frontend optimization.
  - **Duration**: December 2022 - Present

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **pnpm** (preferred package manager)

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Run the development server**:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the project for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint to check for code quality issues.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed JavaScript.
- **Lucide Icons**: Icon library for React.

## Deployment

To deploy the project, build it for production:

```bash
pnpm build
```

Then, serve the production build:

```bash
pnpm start
```

You can also deploy the project to platforms like **Vercel**, **Netlify**, or any other hosting service that supports Next.js.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
