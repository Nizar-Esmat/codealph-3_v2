// Facebook API
fetch('https://graph.facebook.com/YOUR_PAGE_ID?fields=fan_count&access_token=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
        document.getElementById('facebook-follower').textContent = `Followers: ${data.fan_count}`;
    });

// Twitter API
fetch('https://api.twitter.com/1.1/users/show.json?screen_name=YOUR_SCREEN_NAME&include_entities=false', {
    headers: {
        Authorization: 'Bearer YOUR_API_KEY'
    }
})
    .then(response => response.json())
    .then(data => {
        document.getElementById('twitter-follower').textContent = `Followers: ${data.followers_count}`;
    });

// Instagram API
fetch('https://api.instagram.com/v1/users/self/?access_token=YOUR_ACCESS_TOKEN')
    .then(response => response.json())
    .then(data => {
        document.getElementById('instagram-follower').textContent = `Followers: ${data.data.counts.followed_by}`;
    });
