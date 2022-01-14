$button = document.querySelector('.add-button');
$button.addEventListener('click', handleAddButton);

function handleAddButton {
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
