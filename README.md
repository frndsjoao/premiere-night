# Premiere Night

A React Native app for browsing movies using The Movie Database (TMDB) API. Built with TypeScript, featuring a watchlist and nice carousels for discovering films.

## Prerequisites

Before running this, make sure you have:

- **Node.js 20+** (the app won't work with older versions)
- **Xcode** (for iOS) or **Android Studio** (for Android)
- A **TMDB API access token** — [themoviedb.org](https://www.themoviedb.org/settings/api)
- **CocoaPods** (for iOS dependencies)

## Getting Started

1. **Clone and install dependencies**

   ```bash
   npm install
   ```

2. **Set up your environment variables**

   Create a `.env` file in the root directory:

   ```
   API_URL=https://api.themoviedb.org/3
   TMDB_ACCESS_TOKEN=your_tmdb_token_here
   ```

3. **iOS setup** (if running on iOS)

   ```bash
   pod install
   cd ios && pod install && cd ..
   ```

4. **Run the app**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android
   ```

## Running Tests

```bash
npm test
```

## Architecture Notes

**State Management**

- Using **Redux Toolkit** for the watchlist because it's simple persistent data that needs to be accessed from multiple places
- **React Query** handles all the movie data from TMDB — it's good for fetching, caching, and keeping API data fresh

**Navigation**

- Bottom tabs for main sections (Spotlight/Home and Watchlist)
- Stack navigation for detail screens

**Styling**

- **styled-components** for all the UI components
- Centralized theme for colors, spacing, etc.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # Full screen components
├── routes/         # Navigation setup
├── services/       # API clients and business logic
├── store/          # Redux store and slices
├── hooks/          # Custom React hooks
├── styles/         # Theme and global styles
└── @types/         # TypeScript types
```

## Troubleshooting

**iOS build fails**

- Try `cd ios && pod install --repo-update`
- Clean build folder in Xcode

**Metro bundler issues**

- Clear cache: `npm start -- --reset-cache`
