# Portfolio Website with Next.js

This repository contains the source code for a portfolio website built using Next.js. This README.md file provides an overview of the project and instructions on how to set it up and customize it for your own use.

## Table of Contents

- [Portfolio Website with Next.js](#portfolio-website-with-nextjs)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Customization](#customization)
    - [Changing Content](#changing-content)
  - [Deployment](#deployment)
  - [Contributing](#contributing)

## Features

- Responsive design for various screen sizes.
- A customizable portfolio section to showcase your projects.
- An about section to introduce yourself.
- Easily customizable with Shadcn-ui for styling.

## Screenshots

![Screenshot 1](https://github.com/iShinzoo/Portfolio-nextJs/blob/main/portfolio%20website.png)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

You need to have the following software installed on your computer:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Star the repository.

2. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/nixrajput/portfolio-nextjs.git
   ```

3. Navigate to the project directory:

   ```bash
   cd portfolio-nextjs
   ```

4. Install the project dependencies:

   If you're using npm:

   ```bash
   npm install
   ```

   If you're using pnpm:

   ```bash
   pnpm install
   ```

   If you're using Yarn:

   ```bash
   yarn install
   ```

## Usage

To start the development server and view the website locally, run the following command:

```bash
npm run dev
#or
pnpm run dev
# or
yarn dev
```

This will start the Next.js development server, and you can access the website in your web browser at `http://localhost:3000`.

## Customization

You can customize various aspects of the portfolio website to make it your own.

### Changing Content

1. Update the content in the `pages/components` directory:

   - Edit the `projectsSection.jsx` file to add or modify project details.
   - Edit the `skillsSection.jsx` file to add or modify skills you know.
   - Edit the `EmailSection.jsx` file to add or modify social media links.
   - Edit the `AboutSection.jsx` file to add or modify personal details.

2. Replace or add images in the `public/images/projects` directory to match your projects and profile picture.

## Deployment

To deploy the portfolio website to a hosting service of your choice, follow the deployment instructions for Next.js applications. Some popular hosting options include Vercel, Netlify, and GitHub Pages.

Remember to configure environment variables for sensitive information like email credentials if needed.

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.
