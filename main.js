var $button = document.querySelector('.add-button');
$button.addEventListener('click', handleAddButton);

var $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);

var $views = document.querySelectorAll('div[data-view]');

var $modalView = document.getElementById('modal-view');
 $modalView.addEventListener('click', handleModal);

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
    $modalView.className = 'row hidden';
    event.preventDefault();
}

function handleModal(event) {
  $modalView.className = 'row';
}
