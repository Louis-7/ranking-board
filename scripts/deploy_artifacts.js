var ghpages = require('gh-pages');

var options = {
    user: {
        name: 'Louis-7',
        email: 'louisgh.cn@gmail.com'
    },
    dotfiles: true
}

ghpages.publish('out', options, function(err) {
    if (err) {
        console.log('Got an error during the deploy');
        console.error(err);
    } else {
        console.log('Deploy successfully.');
    }

});