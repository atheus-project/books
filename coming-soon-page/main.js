/* https://stackoverflow.com/a/60138011 */
// Check if API exists
if (document && document.fonts) {    
    // Do not block page loading
    setTimeout(function () {           
        document.fonts.load('16px "Young Serif"').then(() => {
        // Make font using elements visible
        document.querySelector('body').style.display = 'flex';
        })
    }, 0)
    } else {
    // Fallback if API does not exist 
    document.querySelector('body').style.display = 'flex';
}