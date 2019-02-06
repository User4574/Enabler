function enabler() {
  $('[ng-disabled]').removeAttr('ng-disabled');
  $('[disabled]').removeAttr('disabled');
}

$(document).ready(enabler);
$(document).bind('DOMSubtreeModified', enabler);
