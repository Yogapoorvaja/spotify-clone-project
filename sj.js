const SpotifyAPI = {
    play: function (trackUri) {
      console.log(`Playing track: ${trackUri}`);
            },
    pause: function () {
                console.log('Pausing track...');
            },
      next: function () {
                console.log('Skipping to the next track...');
            }
        };
        const trackUri = 'spotify:track:your_track_id';
        
