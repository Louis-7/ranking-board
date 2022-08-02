var ghpages = require('gh-pages');

var options = {
    user: {
        name: 'Louis Liu',
        email: 'zliu011@beckman.com'
    }
}

ghpages.publish('build', options, function(err) {
    if (err) {
        console.log('Got an error during the deploy');
        console.error(err);
    } else {
        console.log('Deploy successfully.');
    }

});