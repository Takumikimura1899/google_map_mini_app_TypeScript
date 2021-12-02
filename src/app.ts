const form = document.querySelector('form')!;
const addressInput = document.getElementById('address') as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enterdAddress = addressInput.value;

  //   Google APIに送信
}

form.addEventListener('submit', searchAddressHandler);
