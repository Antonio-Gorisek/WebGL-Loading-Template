# WebGL Loading Template

**Simple UI Loading for Unity WebGL**

This template provides a simple UI loading screen for Unity WebGL builds, including: loading bar, logo, alerts and integration with Google Analytics.
It also contains an optional service worker for offline and caching build files.

<img width="980" height="777" alt="CmrnE4f" src="https://github.com/user-attachments/assets/16d62c16-947b-42f1-9720-9b0a1a30cc10" />

## Key Features

- **Loading Bar:** You can adjust the loading as you wish.
- **Logo Placeholder:** Place your company or loading logo.
- **Warning & Error Banner:** Displays messages to the developer:
- `warning` → yellow, disappears automatically after 5 seconds
- `error` → row, lasts until it is removed
- **Google Analytics:** Measure website visits (daily, weekly, monthly) just enter your public API key
- **Service Worker:** For caching build files and offline work (if enabled in Unity WebGL Build Settings).
- **Mobile Support:** Automatically scales the canvas for iOS and Android devices.

## How to use

- Insert the `WebGLTemplates` folder into your `Asset` folder 
- Edit `index.html` with your data.
- (optional) Replace ``PUBLIC ID KEY'' with your Google Analytics ID.
- (optional) If you want offline support and caching, enable ``Data Caching'' in WebGL Player Settings. Unity will generate a `#if USE_DATA_CACHING` block in `ServiceWorker.js` that caches build files.

## Notes

- Service Worker works only on **HTTPS** or `localhost`.
- Google Analytics only works if the ID is correct.
- If you want offline support, you have to enable Data Caching in Unity Build Settings.
