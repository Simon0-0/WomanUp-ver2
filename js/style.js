$(document).ready(function () {

    var key = 'AIzaSyAJgsyy_wJ3kNLU7iwK2VgI_gVjAENI7is';
    var playlistId = 'PLaGj7XZmFsPtjQLCNhmh7i1JzixFAWNxz';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }


    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            console.log(data);
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        })
    }

    function mainVid(id) {
        $("#video").html(`
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${id}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        `);
    }
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {
            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(52, 200);
            var vid = item.snippet.resourceId.videoId;
            var videoOwner = item.snippet.videoOwnerChannelTitle;
            var datePub = item.snippet.publishedAt.substring(0, 10);


            $('main').append(`
        <article class="item" data-key="${vid}">
                <div>
                <img src="${thumb}" alt="" class="thumb">
                <p>${datePub}</p>
                </div>
                <h4>${title}</h4>
                <button>Full episode \n<i class="fa fa-play" aria-hidden="true"></i></button>
                <p>${desc}...</p>
                <p>${videoOwner}</p>                
           
            </article>
            
        `);
        });

    }


    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });

});

