# Domain Searcher

## Overview

The Domain Searcher is a single-page application (SPA) frontend interface that interacts with the Whois API. It allows users to input a domain name and retrieve comprehensive domain information including registration details and contact information.

For more information about the WHOIS REST API, visit: [WHOIS API Documentation](https://whois.whoisxmlapi.com/documentation/making-requests)

## Tech Stack

- **React JS**: Chosen for its component-based architecture, which facilitates building reusable UI components and managing state efficiently.
- **Tailwind CSS**: Utilized for its utility-first approach, enabling rapid styling and responsive design without writing custom CSS.

## Code Structure

The application follows an Atomic Design structure. This structure promotes reusability, maintainability, and scalability by breaking down components into smaller, cohesive parts.

## Features

- **Input Field**: Allows users to enter a domain name.
- **Submit Button**: Initiates the domain lookup.
- **Information Type Selector**: Enables users to choose between domain information and contact information.
- **Dynamic Table Display**: Shows domain and contact information based on user selection.

## Added Features

- **Light & Dark Mode**: Enhances user experience with toggleable light and dark themes.
- **Reset Data Feature**: Allows users to clear entered domain information and reset the application state.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your environment variables, including the WHOIS API key.
4. Run the application locally with `npm start`.

## Developer

- **Developer**: Michael Jay Makiling
