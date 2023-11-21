<div align="center">
 <a href="https://ytify.netlify.app"><img src="public/ytify_thumbnail_max.webp" width="70%"></a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/fbbcc532-3ef6-41fc-b61e-26cb17cfb6ba/deploy-status)](https://app.netlify.com/sites/ytify/deploys) [![Tokei Lines Of Code](https://tokei.rs/b1/github/n-ce/ytify?style=flat&color=black)](https://github.com/n-ce/ytify)

</div>


> [**ytify**](https://ytify.netlify.app) is a simple WebApp, built with vanilla TypeScript for maximum efficiency, that streams only audio from YouTube. Listen to **Podcasts**, **Audiobooks**, **Music** and other Audio focused YouTube Videos, even under the lowest network conditions.

## What else are you getting ?
- **Queue** 🚦: Add multiple streams to keep your audio streams going. 
- **Playlists** 🎶: Open YouTube playlists and queue them to the player. 
- **Theming** 🎨: Modern Autonomous themed UI based on stream thumbnail. 
- **PWA** 📱: Install ytify as an app on your device and open YouTube links with it from your OS share menu. 
- **Radio** 📻: Fetches similar streams and creates a playlist for your stream, great for music listeners. 
- **Library** 📚: Discover feed, history, favorites & custom playlists. 

![chrome_screenshot_ytify_v6_desktop](https://imageupload.io/ib/U74XZC8af5zwzqD_1695788573.jpg)

## WHY / The story of ytify with [n-ce](https://github.com/n-ce)
- I was an avid [NewPipe](https://github.com/TeamNewPipe/NewPipe) user back in 2021, which I used for background playback.
- I noticed it wasn't able to stream under low network conditions.
- So i decided to create an [issue](https://github.com/TeamNewPipe/NewPipe/issues/5838).
- Upon finding no active resolution on the issue, I took it to myself and created this project on Jan 2022.

## Development Setup 🔧
1. Prerequisites : Node.js , Beginner TypeScript Knowledge. 
2. Clone repository with
```
git clone https://github.com/n-ce/ytify
```
or
```
 gh repo clone n-ce/ytify
```
3. Move to Directory & Install Dependencies
```
cd ytify ; npm install
```
4. If you prefer using DevTools, you may disable eruda in [`vite.config.ts`](https://github.com/n-ce/ytify/blob/main/vite.config.ts) 
  ```
const eruda = false
```
5. Start the development server and open localhost 
```
npm run dev -- --open
```
 
## Usage 👆
1. Visit the [Production Deployment](https://ytify.netlify.app/), or if you've installed the project, wherever you're hosting it.
2. Change the bitrate of the content you're streaming on the `Home` tab.
3. Use the `Search` tab to search for streams with keywords or a direct URL.
4. Click on a stream to open a menu to either play, enqueue, or start a Radio of similar tracks and various other actions.
5. Enjoy listening to music, podcast episodes, or other forms of audio even under low network conditions.
6. Finding something new? Head over to `Discover` on the Library Tab.
7. Want the Highest Quality Output always? Just turn on `Highest Quality` in Settings.
8. Want to save more data or speed up ux? Just turn off `Load Thumbnails` in Settings.

## Privacy Policy 👁️
> We use [Beampipe](https://beampipe.io) Analytics for minimal site stats, only the browser user-agent data is collected anonymously for this. Everything else remains on your device only, which can also be cleared anytime using the clear data option in settings.

## License 📝
> [Read More](https://github.com/n-ce/ytify/blob/main/LICENSE).

## Contributing 📋
> We are actively seeking contributors, [Read More Here](https://github.com/n-ce/ytify/blob/main/CONTRIBUTING.md).

## Acknowledgements 🙏
- [Piped](https://github.com/teampiped/piped) - Powerful YouTube API
- [Cobalt](https://github.com/wukko/cobalt) - YouTube Download API
- [Netlify](https://www.netlify.com) - Hosting, PR Previews, User Feedback Forms.
- [Vite](https://vitejs.dev) - Development Server, Code Bundling, Project Scaffolding.
- [Autoprefixer](https://github.com/postcss/autoprefixer) - CSS Prefixes Solution.
- [Remix Icons](https://github.com/Remix-Design/RemixIcon) - Efficient Icon Solution.
- [Google Fonts](https://fonts.google.com) - NotoSans Font.


