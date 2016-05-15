var app = 
{
    debugMode: window.tinyHippos !== undefined,

    init: function()
    {
        document.addEventListener('deviceready', app.deviceReadyHandler, false);

        //Fix for nasty bug of Ripple having deadly old PhoneGap 2.0.0 behind!
        if(app.debugMode) app.deviceReadyHandler();
    },

    deviceReadyHandler: function()
    {
        console.log('Device is ready and application has been loaded...');
    }
};

app.init();