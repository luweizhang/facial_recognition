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
        /* Here I need to pass in the user_id so that I can call the JYMBII rest API */ 
        var domInfo = {
            profile_pic: document.querySelectorAll('.profile-picture img')[0].src,
            profile_user_id: Number(document.querySelectorAll('.masthead')[0].id.match(/\d+/)),
            my_user_id: document.querySelectorAll('sessionId') //I'm not sure exactly how to get this variable but this is a start. 
        };
        /* Directly respond to the sender (popup), 
         * through the specified callback */
        response(domInfo);
    }
});


