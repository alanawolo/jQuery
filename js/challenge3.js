ch3form.onsubmit = function() {
    var fruit = $('input[name="fruit"]')
    var age = $('input[name="standing"]');
    if (fruit.is(':checked')){
            return true;
    }
    alert("You must pick a fruit!")
    return false;

  }