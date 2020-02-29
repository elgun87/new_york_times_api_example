
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

            let year = document.createElement('p');
            year.style.fontSize = "1.5em";
            year.className = "text-primary";


            let info = document.createElement('p');
            info.style.display = "inline";
            info.style.fontSize = "1.5em";
            info.className = "card-text";
            let strong =  document.createElement('strong');
            strong.append(document.createTextNode(response.response.docs[i].headline.main));

            info.append(strong);
            div.append(span);
            div.append(info);
            div.append(year);

            $('.card-body').append(div);
            

            console.log(response.response.docs[i].web_url)
        });
    }

  });

  $('#clear').on('click', function(){
      $('.card-body').html('');
  });

