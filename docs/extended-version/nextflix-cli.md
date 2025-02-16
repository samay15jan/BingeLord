---
icon: rel-file-path
expanded: true
order: 3
---

# Nextflix CLI

### Overview
This Bash script provides an interactive way to search and watch movies or TV shows using the TMDb API and embeds the selected content using the VidSrc platform. The script also maintains a watch history to allow users to continue watching from where they left off.

### Features
- **Continue Watching:** Checks the watch history and prompts the user to continue from where they left off.
- **Movie & TV Show Search:** Uses TMDb API to search for movies or TV shows.
- **Season & Episode Selection:** If a TV show is selected, the user can choose a specific season and episode.
- **Kiosk Mode Streaming:** Opens the selected movie or episode in Firefox Developer Edition in kiosk mode.
- **Watch History Tracking:** Saves the last watched URL for future access.

### Dependencies
Ensure the following dependencies are installed on your system:
- `curl` (for making API requests)
- `jq` (for parsing JSON responses)
- `dmenu` (for interactive menu selection)
- `firefox-developer-edition` (for kiosk mode playback)

### Installation
1. Clone or download the script from the provided [Gist](https://gist.github.com/samay15jan/8051f3017d92414f114924da79856162).
2. Update the `API_KEY` variable with your TMDb API key.
3. Ensure the script has execution permissions:
   ```bash
   chmod +x nextflix.sh
   ```

### Usage
1. Run the script:
   ```bash
   ./nextflix.sh
   ```
2. If there is a previous watch history, the script will ask if you want to continue watching.
3. Select whether you want to watch a "Movie" or "TV Show."
4. Enter the title of the movie or TV show.
5. If it's a TV show, select a season and an episode.
6. The selected content will open in Firefox Developer Edition in kiosk mode.

### Watch History
The script maintains a watch history file at:
```
$HOME/.cache/nextflix/watch_history
```
This file logs the last watched URL, allowing the user to resume later.

### Notes
- Ensure you replace `YOUR API KEY` in the script with a valid TMDb API key.
- The script uses VidSrc for embedding content, which may be subject to availability.
- If the script does not find a movie or TV show, it exits gracefully.

### License
This script is open-source and can be modified for personal use.

Stay tuned for more updates at [here](https://gist.github.com/samay15jan/8051f3017d92414f114924da79856162)!