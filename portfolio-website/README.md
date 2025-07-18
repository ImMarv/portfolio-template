# Portfolio Website

This is a portfolio website project that showcases various works and provides a contact page for inquiries. The project is structured to separate concerns between the frontend and backend, utilizing Express and EJS for templating.

## Project Structure

```
portfolio-website/
├── public/                   # All static files go here
│   ├── css/                  # Stylesheets
│   │   └── styles.css
│   ├── js/                   # Frontend JavaScript
│   │   └── main.js
│   ├── assets/               # Images, thumbnails, videos, icons
│   ├── data/                 # JSON files for dynamic content
│   │   └── videos.json
│   └── index.html            # Static home/about page
├── views/                    # Templating (if using Express + EJS or similar)
│   ├── layout.ejs
│   ├── works.ejs
│   ├── animation.ejs
│   └── contact.ejs
├── routes/                   # Express backend route files
│   ├── contact.js
│   └── works.js
├── controllers/              # Optional: logic separated from routes
│   └── contactController.js
├── utils/                    # Helper functions (e.g., send email, validation)
│   └── mailer.js
├── app.js                    # Main Express app entry point
├── package.json              # npm dependencies and scripts
├── .gitignore
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Visit the website:**
   Open your browser and go to `http://localhost:3000` to view the portfolio website.

## Features

- **Home/About Page:** The main landing page that introduces the portfolio.
- **Works Section:** A dedicated page to showcase various projects.
- **Animation Section:** A page to display animations or related content.
- **Contact Page:** A form for users to reach out with inquiries.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.