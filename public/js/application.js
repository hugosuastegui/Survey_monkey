$(document).ready(function() {

  //create three initial fields
  var info = {};
  var $pregunta = 0;
  var $survey_name = "survey_name";
  var startingNo = 0;
  var $node = "";
  for(varCount=0;varCount<=startingNo;varCount++){
      var displayCount = varCount+1;
      var counter = varCount;
      $node += '<p><label for="var'+displayCount+'">Question '+displayCount+': </label><input id="question_'+counter+'"type="text" name="var'+displayCount+'" id="var'+displayCount+'"><span class="create_question"> Create Question</span></p>';
  };
  //add them to the DOM
  $('#form_question').prepend($node);
  //CREATE QUESTION
  $('#form_question').on('click', '.create_question', function(){
     // $(this).parent().remove();
    $pregunta = $('#question_'+counter).val();
    console.log($pregunta);
    info[$pregunta] = [];
    $(this).parent().hide();
    myFunction($pregunta, '#form_question');
  });
  //APPEND TO OL
  $('body').on('click', '.subm', function(e){
    e.preventDefault();
    // var test = $('' + this + '> input');
    var val = $('form#option > input[name=option_description_'+counter+']').val();
    info[$pregunta].push(val);
    console.log(info);
    $('ol#list_options_'+counter).append("<li>" + val + "</li>");
  });


  //add a new node
  $('#done_question').on('click', function(){
  varCount++;
  counter++;
  $node = '<p><label for="var'+varCount+'">Question '+varCount+': </label><input type="text" name="var'+varCount+'" id="question_'+counter+'"><span class="create_question">Create Question</span></p>';
  $('#option').hide();
  $(this).parent().before($node);
  });

  function myFunction(h2, selector){
    $note = '<div class="box"><h2 class="question">'+h2+'</h2><br><br><ol id="list_options_'+counter+'"></ol><br><br><form id="option"><input type="text" name="option_description_'+counter+'" placeholder="Add choice">&nbsp<input class="subm" type="submit" value="Add choice"></form></div>';
    $(selector).before($note);
  }

  $("#final_submit").on('click', function(e){
    e.preventDefault();
    console.log("**************** INSIDE FINAL SUBMIT CLICK ***********");
    var name = $('#survey_name').val();
    console.log(name);
    info[$survey_name] = name;
    console.log(info);
    var obj = JSON.stringify(info);
    var inf = "inf=" + obj;
    console.log(obj);
    $.post('/create', inf, function(data){
      window.location.replace('/surveys');
    });

  });
});