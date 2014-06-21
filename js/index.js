
var app = {
        audioSource: ['sounds/sound1.mp3','sounds/sound2.mp3','sounds/sound3.mp3','sounds/sound4.mp3'],
        currentTrack:0,
        
        // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.audio = document.getElementById('audioElement');
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        $(document).on('swipeleft', this.onSwipeLeft);
        $(document).on('swiperight', this.onSwipeRight);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app._receivedEvent('deviceready');
        
    },
    toggleMusic: function(){
        if (!app.audio.paused){
            console.log('click, pausing music');
            app.audio.pause();
            document.getElementById('toggle').innerHTML = 'Play';
        }
        else{
            console.log('click, playing music');
            app.audio.play();
            document.getElementById('toggle').innerHTML = 'Pause';
        }
        
    },
    onSwipeLeft: function(){
        console.log('SwipeLeft, going to next song');
        app.nextSong();
    },
    onSwipeRight: function(){
        console.log('SwipeLeft, going to previous song');
        app.previousSong();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        if (id ==='deviceready') {
            this.changeAudioSource(0);
            app.audio.play();
        }
        
    },
    pause: function(){
        app.audio.pause();
        
    },
    play: function(){
        app.audio.play();
    },
    nextSong: function(){
        this.currentTrack++;
        if (this.currentTrack>(this.audioSource.length-1)){
            this.currentTrack=0;
        }
        app.changeAudioSource(this.currentTrack);
        app.audio.play();
        
    },
    previousSong: function(){
        this.currentTrack--;
        if (this.currentTrack < 0){
            this.currentTrack=(this.audioSource.length-1);
        }
        app.changeAudioSource(this.currentTrack);
        app.audio.play();
        
    },
    changeAudioSource: function(songNum){
        this.currentTrack=songNum;
        app.audio.src = this.audioSource[this.currentTrack];
    }
    
};
