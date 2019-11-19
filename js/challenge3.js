$(document).ready(function(){
          $("form").submit(function(onsubmit){
            var fruit = $('input[name="fruit"]');
            var year = $('input[name="standing"]');
            if((fruit.is(":checked")) && (year.is(":checked"))){
              return true;
            }
            alert("Pick a fruit and a year!");
            return false;
          })
        })