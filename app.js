
  $('#search').on('click', function(){
    var select = $('select').val();
    var search_input = document.getElementById('search_input');
    var start_year = $('#start_year').val();
    var end_year = $('#end_year').val();

    var count = 1;

    var authKey = "aubwUFaPcONJAaQgkQWI4UkMCIMAvGdC";
    let queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + search_input.value; + "&begin_date=" + start_year + "0101&end_date=" + end_year + "0101";


    for(let i = 0;i < select;i ++){
        $('.card-body').html('');
        $.ajax({
            url: queryURLBase,
            method: 'GET',
            dataType: 'json'
        }).then(function(response){
            let div = document.createElement('div');
            div.style.padding = "20px";
            div.style.backgroundColor = "#ecf0f1";
            div.style.marginTop = "20px";
            div.style.borderRadius = "10px";

            let span = document.createElement('span');
            span.style.marginRight = "5px";
            span.className = "card-title";
            span.style.display= "inline-block";
            span.style.width = "30px";
            span.style.textAlign = "center";
            span.style.color = "white";
            span.style.backgroundColor = "#2c3e50";
            span.append(document.createTextNode(count));

            count++;

            let link_a = document.createElement('a');
            link_a.style.display = "inline";
            link_a.style.fontSize = "1.5em";
            link_a.className = "card-text";
            link_a.href = `${response.response.docs[i].web_url}`;
            link_a.setAttribute('target','blank');

            let strong =  document.createElement('strong');
            strong.append(document.createTextNode(response.response.docs[i].headline.main));
            link_a.append(strong);

            div.append(span);
            div.append(link_a);

            $('.card-body').append(div);
        });
    }

  });

  $('#clear').on('click', function(){
      $('.card-body').html('');
  });

