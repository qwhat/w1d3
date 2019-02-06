var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    var playlists = this.playlists;
    for(playlistId in playlists) {
      var playlist = playlists[playlistId]
      console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks")
    }
  },
  printTracks: function () {
    var tracks = this.tracks;
    for(trackId in tracks) {
      var track = tracks[trackId]
      console.log(trackId + ": " + track.name + " by " + track.artist + " (" + track.album + ")")
    }
  },
  printPlaylist: function (playlistId) {
    var playlist = this.playlists[playlistId]
    var playlists = this.playlists
    var tracks = playlist.tracks
    console.log(playlistId + ": " + playlist.name + " - " + tracks.length + " tracks");


    for (trackId of tracks) {
      var track = this.tracks[trackId]
      console.log(trackId + ": " + track.name + " by " + track.artist + " (" + track.album +")")
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var trackId = this.tracks[trackId]//trackId needs to be equal to arg1
    var playlistId = this.playlists[playlistId]//playlistId needs to be equal to arg2
    playlistId.tracks.push(trackId.id)//add given TrackId to given playlistId
    console.log(this.playlists)
  },
  addTrack: function (name, artist, album) {
    var trackId = uid()
    var newTrack = {
      id: trackId,
      name: name,
      artist: artist,
      album: album,
    }
    library.tracks[trackId] = newTrack;
    console.log(this.tracks)
  },
  addPlaylist: function (name) {
    var playlistId = uid()
    var newPlaylist = {
      id: playlistId,
      name: name,
      tracks: []
    }
    this.playlists[playlistId] = newPlaylist
    console.log(this.playlists)
  },
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists()

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks()

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist("p01")

// adds an existing track to an existing playlist

library.addTrackToPlaylist("t01", "p02")

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

library.addTrack("dance dance", "Fall Out Boy", "From under the Cork Tree")

// adds a playlist to the library

library.addPlaylist("ThisIsTooDamnLong")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
