# 🚀 React Native Jobs Career

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📝 Description

React Native Jobs Career is a modern mobile application that helps users find job opportunities. The app connects to the JSearch API to fetch real-time job listings, allowing users to browse popular and nearby jobs, search for specific positions, and view detailed information about each job posting.

The application features a clean and intuitive user interface with smooth navigation between screens, making job hunting a seamless experience on mobile devices.

## ✨ Features

- Browse popular job listings with horizontal scrolling
- View nearby job opportunities in a compact list view
- Search for specific job positions with custom keywords
- Explore detailed job information including qualifications and responsibilities
- Easy navigation with back and share functionality
- Pagination support for search results
- Modern UI with consistent theming and styling


## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/ngnphamgiahuy/React-Native-Jobs-Career.git

# Navigate to the project directory
cd React-Native-Jobs-Career

# Install dependencies
npm install

# Start the development server
npm start
```

## 🚀 Usage

After starting the development server, you can:

```bash
# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

Scan the QR code with the Expo Go app on your mobile device or use an emulator to see the application in action.

## 🔧 Configuration

To use the JSearch API, you'll need to obtain an API key from RapidAPI:

1. Sign up for a [RapidAPI](https://rapidapi.com) account
2. Subscribe to the [JSearch API](https://rapidapi.com/jsearch/api/jsearch)
3. Replace the API key in the `hook/useFetch.js` file:

```javascript
headers: {
    "X-RapidAPI-Key": "YOUR_API_KEY_HERE",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
},
```

## 🗂️ Folder Structure

```
├── app/                # Expo Router app directory
│   ├── _layout.js      # Root layout component
│   ├── index.js        # Home screen
│   ├── job-details/    # Job details screen
│   └── search/         # Search results screen
├── assets/             # Images and other static assets
├── components/         # Reusable UI components
│   ├── common/         # Shared components (buttons, cards)
│   ├── home/           # Components specific to home screen
│   └── jobdetails/     # Components for job details
├── constants/          # Theme, colors, and constants
├── hook/               # Custom hooks for data fetching
├── styles/             # Style definitions
└── utils/              # Utility functions
```

## 🤝 Contributing

Contributions are welcome! To contribute:

```bash
# Create a new branch
git checkout -b feature/amazing-feature

# Make your changes and commit them
git commit -m "Add amazing feature"

# Push to your branch
git push origin feature/amazing-feature

# Create a pull request
```

## 🙏 Acknowledgements

- Built with [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/)
- Job data provided by [JSearch API](https://rapidapi.com/jsearch/api/jsearch)
- UI design inspired by modern mobile applications
- Thanks to the React Native community for their excellent documentation and support 