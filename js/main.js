$("#ButtonForm").click(function(e){
  e.preventDefault();

  let word = $("#dictionary-search").val()

  $('#mySelector').empty();

      $.ajax({
          url: 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'+word+'?key=6010fb8f-d786-49d6-bc01-a01d66074fd5',
          dataType:'json',
          type: 'GET',
          success:function(res){
            console.log(res);
            res.forEach(element => {
              console.log(element.hwi)
              $('<div/>', {
                id: element.hwi.hw,
                class: 'some-class',
                title: 'now this div has a title!',
                text: 'Word: ' + element.hwi.hw + ' Definition: ' + element.shortdef[0],
            }).appendTo('#mySelector');
            });
          }
      });
  });