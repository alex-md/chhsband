# Student Marching Band Website

This project is a static website for a student marching band, built using HTML, JavaScript, and Tailwind CSS. It includes a home page, an about page, and a calendar page to provide information about the band and its events.

## Project Structure

```
student-marching-band-website
├── src
│   ├── css
│   │   └── tailwind.css
│   ├── js
│   │   └── main.js
│   ├── pages
│   │   ├── about.html
│   │   ├── calendar.html
│   │   └── index.html
├── tailwind.config.js
└── README.md
```

## Features

- **Home Page**: Introduction to the marching band, recent news, and links to other pages.
- **About Page**: Information about the band's history, mission, and members.
- **Calendar Page**: Upcoming events, practices, and performances.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install Tailwind CSS by following the [official installation guide](https://tailwindcss.com/docs/installation).
4. Build the Tailwind CSS file using the command:
   ```
   npx tailwindcss -i ./src/css/tailwind.css -o ./dist/output.css --watch
   ```
5. Open the `src/pages/index.html` file in your web browser to view the website.

## Technologies Used

- HTML
- JavaScript
- Tailwind CSS

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.