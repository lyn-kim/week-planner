var $button = document.querySelector('.add-button');
$button.addEventListener('click', handleAddButton);

var $submit = document.querySelector('.entry-submit-btn');
$submit.addEventListener('submit', handleSubmit);

function handleAddButton(event) {
  openAddEntryModal();
}

function switchViews(dataView) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === dataView) {
      $views[i].className = 'row';
    } else {
      $views[i].className = 'row hidden';
    }
  }
}

function openAddEntryModal() {
  switchViews('add-entry');
}

function handleSubmit(event) {
  switchViews('landing-page');
}
