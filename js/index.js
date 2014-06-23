

var app = {
        
        
        // Application Constructor
    initialize: function() {
        this.troubleshoot= false;
        this.audioSource= ['sounds/sound1.mp3','sounds/sound2.mp3','sounds/sound3.mp3','sounds/sound4.mp3'];
        this.currentTrack=0;
        this.audio=document.getElementById('audioElement');
        this.bindEvents();
        $('#content').css({
            "margin-top": $(".header").height()
        });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        $('.app').on('swipeleft', this.onSwipeLeft);
        $('.app').on('swiperight', this.onSwipeRight);
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
            //TROUBLESHOOTING
            if (app.troubleshoot){
                console.log('pausing music');
            }
            app.audio.pause();
        }
        else{
            //TROUBLESHOOTING
            if (app.troubleshoot){
                console.log('playing music');
            }
            app.audio.play();
        }
        app.updateToggleButtons();
        
    },
    onSwipeLeft: function(){
        //TROUBLESHOOTING
        if (app.troubleshoot){
            console.log('SwipeLeft, going to next song');
            
        }
        app.nextSong();
    },
    onSwipeRight: function(){
        //TROUBLESHOOTING
        if (app.troubleshoot){
            console.log('SwipeLeft, going to previous song');
        }
        app.previousSong();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        if (id =='deviceready') {
            //TROUBLESHOOTING
            if (app.troubleshoot){
                console.log('DEVICE IS READY PLAYING MUSIC');
            }
            app.changeAudioSource(0);
            app.audio.play();
            app.updateToggleButtons();
        }
        
    },
    pause: function(){
        app.audio.pause();
        app.updateToggleButtons();
    },
    play: function(){
        app.audio.play();
        app.updateToggleButtons();
    },
    nextSong: function(){
        app.currentTrack++;
        if (app.currentTrack>(app.audioSource.length-1)){
            app.currentTrack=0;
        }
        app.changeAudioSource(app.currentTrack);
        app.audio.play();
        app.updateToggleButtons();
    },
    previousSong: function(){
        app.currentTrack--;
        if (app.currentTrack < 0){
            app.currentTrack=(app.audioSource.length-1);
        }
        app.changeAudioSource(app.currentTrack);
        app.audio.play();
        app.updateToggleButtons();
        
    },
    //Is This method really necesary???
    changeAudioSource: function(songNum){
        app.currentTrack=songNum;
        app.audio.src = app.audioSource[app.currentTrack];
    },
    updateToggleButtons: function(){
        var togglebuttons = document.getElementsByClassName('toggle-play-button');
        var audioStatus;
        if (app.audio.paused){
            audioStatus="Play";
        }
        else{
            audioStatus="Pause";
        }
        for (i=0; i<togglebuttons.length; i++){
                togglebuttons.item(i).innerHTML = audioStatus;
        }
    },
    pageTransition: function(fromPageID, toPageID){
        $('#shade').trigger('click');
        if (fromPageID){
            $(fromPageID).fadeOut().removeClass('activePage');
        }else{
            $('.activePage').fadeOut().removeClass('activePage');
        }
        $(toPageID).fadeIn().addClass('activePage');
    }
    
    
};
