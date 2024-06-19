# Minecraft Portal Coordinate Converter

## Overview
The Minecraft Portal Coordinate Converter is a tool designed to help players of Minecraft calculate corresponding portal locations between the Nether and the Overworld. This utility simplifies the process of finding precise portal positions to ensure accurate travel between these two dimensions in the game.

## Technology Used
- **React**: The application is built using React, showcasing dynamic UI updates and state management using the useState hook.
- **React Router**: Implemented for handling client-side routing, enabling navigation between different pages without a full page reload.
- **Tailwind CSS**: For styling, Tailwind CSS is used to make the application responsive and visually appealing.
- **Vite**: Used as the build tool for fast development and production builds.
- **GitHub Pages**: Hosts the application, hosted as a static web page.



## Live Demo
Experience the Minecraft Portal Coordinate Converter live: [Minecraft Apps Live Demo](https://berodtm.github.io/minecraft-apps/)

## Features
- **Coordinate Input**: Users can input coordinates for either the Nether or the Overworld, and the tool calculates the corresponding coordinates in the opposite dimension.
- **Mobile-Friendly**: The application is optimized for mobile users, making it easy to use on any device.
- **Dynamic Updates**: Utilizes React's state management to update and display the converted coordinates instantaneously.

## Understanding of State
React's useState hook plays a crucial role in this application. It manages the input values for coordinates in both the Nether and the Overworld. Whenever a user modifies the input fields, the state updates accordingly, triggering the application to re-render and display the new calculated coordinates based on the input. This demonstrates an effective use of React's stateful logic to enable dynamic and responsive user experiences.

## Installation and Setup
To run this project locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Berodtm/minecraft-apps.git
   ```
2. Navigate to the project directory:
   ```bash
   cd minecraft-apps
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment
To deploy this application to GitHub Pages, you can run:
```bash
npm run deploy
```
This script builds the application and pushes the build to the `gh-pages` branch of the repository.