/* Inform the backgrund page that 
 * this tab should have a page-action */
chrome.runtime.sendMessage({
    from:    'content',
    subject: 'showPageAction'
});

/* Listen for message from the popup */
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    /* First, validate the message's structure */
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        /* Collect the necessary data 
         * (For your specific requirements `document.querySelectorAll(...)`
         *  should be equivalent to jquery's `$(...)`) */
        var domInfo = {
            total:   document.querySelectorAll('.profile-picture img')[0].src,
            inputs:  document.getElementById("control_gen_4").childNodes[0].src,
            buttons: document.querySelectorAll('button').length
        };
        /* Directly respond to the sender (popup), 
         * through the specified callback */
        response(domInfo);
    }
});