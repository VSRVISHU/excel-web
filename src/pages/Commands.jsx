import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Commands.css';

function Commands() {
  const { theme } = useContext(ThemeContext);
  const commandCategories = {
    "Configuration": [
      { name: "247", description: "Set the bot to stay in the voice channel" },
      { name: "dj", description: "Manage the DJ mode and associated roles" },
      { name: "prefix", description: "Shows the bot's prefix" },
      { name: "setup", description: "Sets up the bot" }
    ],
    "Utility": [
      { name: "botinfo", description: "Shows the bot's information" },
      { name: "help", description: "Shows the help menu" },
      { name: "invite", description: "Shows the bot's invite link" },
      { name: "ping", description: "Displays the bot's ping and shard information" },
      { name: "support", description: "Join our support server" },
      { name: "uptime", description: "Displays the uptime stats of Excel Music" }
    ],
    "Music": [
      { name: "autoplay", description: "Toggles autoplay" },
      { name: "clearqueue", description: "Clears the queue" },
      { name: "join", description: "Joins the voice channel" },
      { name: "leave", description: "Leaves the voice channel" },
      { name: "loop", description: "Loops the current song or queue" },
      { name: "nowplaying", description: "Shows the currently playing song" },
      { name: "pause", description: "Pauses the current song" },
      { name: "play", description: "Plays a song from Spotify" },
      { name: "queue", description: "Shows the current queue" },
      { name: "remove", description: "Removes a song from the queue" },
      { name: "resume", description: "Resumes the current song" },
      { name: "search", description: "Searches for a song" },
      { name: "seek", description: "Seeks to a specific time in the song" },
      { name: "shuffle", description: "Shuffles the queue" },
      { name: "skip", description: "Skips the current song" },
      { name: "skipto", description: "Skips to a specific song in the queue" },
      { name: "stop", description: "Stops the music and clears the queue" },
      { name: "volume", description: "Sets the player's volume" }
    ],
    "Filters": [
      { name: "8d", description: "On/Off 8d filter" },
      { name: "distorsion", description: "On/Off distortion filter" },
      { name: "pitch", description: "On/Off pitch filter" },
      { name: "reset", description: "Resets active filters" },
      { name: "rotation", description: "On/Off rotation filter" },
      { name: "tremolo", description: "On/Off tremolo filter" },
      { name: "vibrato", description: "On/Off vibrato filter" },
      { name: "bassboost", description: "On/Off bassboost filter" },
      { name: "karaoke", description: "On/Off karaoke filter" },
      { name: "lowpass", description: "On/Off lowpass filter" },
      { name: "nightcore", description: "On/Off nightcore filter" },
      { name: "speed", description: "Sets the song speed" }
    ],
    "Premium": [
      { name: "redeem", description: "Redeem a premium code" },
      { name: "validity", description: "Check premium stats" }
    ]
  };

  return (
    <div className="commands-page" style={{ background: theme.gradients.background }}>
      <div className="commands-hero glass" style={{ background: theme.gradients.card, borderColor: theme.border }}>
        <h1>Command List</h1>
        <p>Explore all available commands to enhance your music experience</p>
      </div>

      <div className="commands-scroll-container">
        <div className="commands-row">
          {Object.entries(commandCategories).map(([category, commands]) => (
            <div className="command-category glass" key={category} style={{ background: theme.backgroundTertiary, borderColor: theme.border }}>
              <div className="category-header">
                <h2 style={{ color: theme.primary }}>{category}</h2>
                <div className="glow-bar"></div>
              </div>
              <div className="commands-list">
                {commands.map(cmd => (
                  <div 
                    className="command-item" 
                    key={cmd.name} 
                    onClick={() => {
                      if (category === "Premium") {
                        window.location.href = "/premium";
                      }
                    }}
                  >
                    <div className="command-name" style={{ color: theme.text }}>
                      <span className="prefix">/</span>
                      {cmd.name}
                    </div>
                    <p className="command-desc" style={{ color: theme.textSecondary }}>{cmd.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Commands;