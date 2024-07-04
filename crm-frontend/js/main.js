const url = 'http://localhost:3000';

async function serverAddClients(obj) {
  let response = await fetch(url + '/api/clients', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  });

  let data = await response.json();
  return data
}

async function serverGetClients() {
  let response = await fetch(url + '/api/clients', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });

  let data = await response.json();
  return data
}

async function serverGetClientsId(id) {
  let response = await fetch(url + '/api/clients/' + id, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });

  let data = await response.json();
  return data
}

async function serverUpdateClients(obj, id) {
  let response = await fetch(url + '/api/clients/' + id, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  });

  let data = await response.json();
  return data
}

async function serverDeleteClients(id) {
  let response = await fetch(url + '/api/clients/' + id, {
    method: "DELETE",
  });

  let data = await response.json();
  return data
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(function load() {
    let preloader = document.querySelector('.preloader');

    if (!preloader.classList.contains('preloader--hidden')) {
      preloader.classList.add('preloader--hidden');
    }
  }, 600);
});

let serverData = await serverGetClients();

let clients = [];

if (serverData !== null) {
  clients = serverData;
}

let clientsCopy = clients;

const contactIcons = [{
    type: 'Vk',
    value: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g opacity="0.7">
        <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
      </g>
    </svg>
  `
  },
  {
    type: 'Facebook',
    value: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g opacity="0.7">
        <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
      </g>
    </svg>
  `
  },
  {
    type: 'Телефон',
    value: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g opacity="0.7">
        <circle cx="8" cy="8" r="8" fill="#9873FF"/>
        <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
      </g>
    </svg>
  `
  },
  {
    type: 'Email',
    value: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
    </svg>
  `
  },
  {
    type: 'add',
    value: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
    </svg>     
  `
  }
]

const contacts = `
  <div class="popup-contacts__dropdown dropdown">
    <button type="button" class="dropdown__top btn-reset">
      <div class="dropdown__text">Телефон</div>
      <img class="dropdown__arrow" src="./img/arrow.svg" alt="">
    </button>
    <div class="dropdown__bottom">
      <ul class="dropdown__list list-reset">
        <li class="dropdown__item">
          <a href="#" class="dropdown__link">Телефон</a>
        </li>
        <li class="dropdown__item">
          <a href="#" class="dropdown__link">Email</a>
        </li>
        <li class="dropdown__item">
          <a href="#" class="dropdown__link">Vk</a>
        </li>
        <li class="dropdown__item">
          <a href="#" class="dropdown__link">Facebook</a>
        </li>
        <li class="dropdown__item">
          <a href="#" class="dropdown__link">Другое</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="popup-contacts__form">
    <input data-required="true" class="popup-contacts__input" placeholder="Введите данные контакта" type="tel">
    <button class="popup-contacts__delete btn-reset" type="button">
      <img src="./img/cancel.svg" alt="">
    </button>
  </div>
`

function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  let yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;
  return dd + '.' + mm + '.' + yy;
}

function formatTime(date) {
  let hh = date.getHours();
  if (hh < 10) hh = '0' + hh;
  let mm = date.getMinutes();
  if (mm < 10) mm = '0' + mm;
  return hh + ':' + mm;
}

function getFIO(clientObj) {
  let fio = `${clientObj.surname} ${clientObj.name} ${clientObj.lastName}`;
  return fio;
}

function close() {
  document.getElementById("name").value = '';
  document.getElementById("lastname").value = '';
  document.getElementById("surname").value = '';

  document.querySelectorAll('.popup-contacts__input').forEach(el => {
    el.value = ''
  });

  document.querySelectorAll('.popup-contacts').forEach(el => {
    el.style.display = 'none';
  });

  document.querySelectorAll('.popup__area').forEach(area => {
    area.style.paddingTop = '8px';
    area.style.paddingBottom = '8px';
  });

  document.body.style.paddingRight = '0px';
  document.body.classList.remove('lock');
}

for (const clientObj of clients) {
  clientObj.fio = getFIO(clientObj);
}

function setData(id, btn) {
  btn.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector('.popup--delete').dataset.number = id;
    document.querySelector('.popup--change').dataset.number = id;
  });
}

async function deleteClients(clientsObj, tr, btn) {
  const popup = document.querySelector('.popup--delete');

  btn.addEventListener('click', async e => {
    e.preventDefault();

    if (popup) {
      const $cancel = popup.querySelector('.popup-cancel');

      function closePopup() {
        document.body.style.paddingRight = '0px';
        document.body.classList.remove('lock');
      }

      $cancel.addEventListener('click', e => {
        e.preventDefault();

        popup.classList.remove('open');
        setTimeout(close, 500);
      });

      const $delete = popup.querySelector('.popup-delete');

      $delete.addEventListener('click', async e => {
        e.preventDefault();

        if (document.querySelector('.popup--delete.open')) {
          if (document.querySelector('.popup--delete.open').dataset.number === tr.dataset.id) {
            if (tr.dataset.id == clientsObj.id) {
              await serverDeleteClients(clientsObj.id);
            }

            popup.classList.remove('open');
            tr.remove();
            setTimeout(closePopup, 500);

            clients = await serverGetClients();

            const fio = input.value.trim();
            clientsCopy = filter(clientsCopy, 'fio', fio);

            for (const clientObj of clients) {
              clientObj.fio = getFIO(clientObj);
            }
          }
        }
      });
    }
  });
}

function getContacts(contactsNew, popup) {
  contactsNew.forEach(contact => {
    const area = popup.querySelector('.popup__area');
    const wrap = area.querySelector('.popup__contacts-wrap');
    area.prepend(wrap);

    area.style.paddingTop = '25px';
    area.style.paddingBottom = '25px';
    const contactsWrap = document.createElement('div');
    contactsWrap.classList.add('popup__contacts');
    contactsWrap.classList.add('popup-contacts');
    contactsWrap.classList.add('input-parent');
    contactsWrap.innerHTML = contacts;
    wrap.append(contactsWrap);

    const dropdown = contactsWrap.querySelector('.dropdown');

    const wraps = document.querySelectorAll('.popup-contacts');

    wraps.forEach(el => {
      el.querySelector('.popup-contacts__delete').addEventListener('click', e => {
        e.preventDefault();

        el.remove();

        if (wrap.innerHTML === '') {
          area.style.paddingTop = '8px';
          area.style.paddingBottom = '8px'
        }
      });
    });

    const top = dropdown.querySelector('.dropdown__top');
    const topText = top.querySelector('.dropdown__text');

    getDropdown(dropdown, top, contactsWrap);

    top.querySelector('.dropdown__text').textContent = contact.type;
    contactsWrap.querySelector('.popup-contacts__input').value = contact.value;

    if (contact.type === 'Телефон') {
      Inputmask("+7 (999) 999-99-99").mask(contactsWrap.querySelector('.popup-contacts__input'));
    }

    if (topText.textContent === 'Vk' || topText.textContent === 'Facebook' || topText.textContent ===
      'Другое') {
      dropdown.parentNode.querySelector('.popup-contacts__input').setAttribute('type', 'text');
      removeMask();
    } else if (topText.textContent === 'Телефон') {
      dropdown.parentNode.querySelector('.popup-contacts__input').setAttribute('type', 'tel');
      mask();
    } else if (topText.textContent === 'Email') {
      dropdown.parentNode.querySelector('.popup-contacts__input').setAttribute('type', 'mail');
      removeMask();
    }
  });
}

async function getClientsData(clientsObj, tr, btn) {
  const popup = document.querySelector('.popup--change');

  function closePopup() {
    document.body.style.paddingRight = '0px';
    document.body.classList.remove('lock');

    popup.querySelectorAll('.popup-contacts').forEach(el => {
      el.remove();
    });

    if (popup.querySelector('.popup__contacts-wrap').textContent === '') {
      popup.querySelector('.popup__area').style.paddingTop = '8px';
      popup.querySelector('.popup__area').style.paddingBottom = '8px';
    }
  }

  btn.addEventListener('click', async e => {
    e.preventDefault();

    if (popup) {
      let lastname = document.getElementById('lastname-change');
      let name = document.getElementById('name-change');
      let surname = document.getElementById('surname-change');
      lastname.value = clientsObj.lastName;
      name.value = clientsObj.name;
      surname.value = clientsObj.surname;

      mask();

      popup.querySelector('.popup__id').textContent = `ID: ${clientsObj.id}`;

      const deleteClient = popup.querySelector('.popup-delete-client');

      deleteClient.addEventListener('click', async e => {
        e.preventDefault();

        if (document.querySelector('.popup--change.open').dataset.number === tr.dataset.id) {
          if (tr.dataset.id == clientsObj.id) {
            await serverDeleteClients(clientsObj.id);
          }

          popup.classList.remove('open');

          tr.remove();
          setTimeout(closePopup, 500);

          clients = await serverGetClients();

          const fio = input.value.trim();
          clientsCopy = filter(clientsCopy, 'fio', fio);

          for (const clientObj of clients) {
            clientObj.fio = getFIO(clientObj);
          }
        }
      });

      getContacts(clientsObj.contacts, popup);
    }
  });
}

async function getClients(clientsObj) {
  const $tr = document.createElement('tr');
  const $tdFIO = document.createElement('td');
  const $tdCreate = document.createElement('td');
  const $tdChange = document.createElement('td');
  const $tdID = document.createElement('td');
  const $tdContacts = document.createElement('td');
  const $tdActions = document.createElement('td');

  const $tdContactsWrap = document.createElement('div');
  const $tdCreateWrap = document.createElement('div');
  const $tdChangeWrap = document.createElement('div');
  const $tdCreateDate = document.createElement('div');
  const $tdCreateTime = document.createElement('div');
  const $tdChangeDate = document.createElement('div');
  const $tdChangeTime = document.createElement('div');
  const $tdChange2Link = document.createElement('a');
  const $tdDeleteLink = document.createElement('a');
  const $tdActionsWrap = document.createElement('div');
  const $tdChange2 = document.createElement('div');
  const $tdDelete = document.createElement('div');

  $tdFIO.classList.add('table__td');
  $tdFIO.classList.add('table__td--fio');
  $tdID.classList.add('table__td');
  $tdID.classList.add('table__td--id');
  $tdCreate.classList.add('table__td');
  $tdCreate.classList.add('table__td--create');
  $tdChange.classList.add('table__td');
  $tdChange.classList.add('table__td--change');
  $tdContacts.classList.add('table__td');
  $tdContacts.classList.add('table__td--contacts');
  $tdContactsWrap.classList.add('table__td-wrap');
  $tdCreateDate.classList.add('table__create-date');
  $tdCreateTime.classList.add('table__create-time');
  $tdChangeDate.classList.add('table__change-date');
  $tdChangeTime.classList.add('table__change-time');
  $tdChange2.classList.add('table__td');
  $tdChange2.classList.add('table__td--change2');
  $tdDelete.classList.add('table__td');
  $tdDelete.classList.add('table__td--delete');
  $tdChange2Link.classList.add('table__change-link');
  $tdChange2Link.classList.add('popup-btn');
  $tdDeleteLink.classList.add('table__delete-link');
  $tdDeleteLink.classList.add('popup-btn');
  $tdActions.classList.add('table__actions');
  $tdActionsWrap.classList.add('table__actions-wrap');

  $tdContacts.append($tdContactsWrap);
  $tdCreate.append($tdCreateWrap);
  $tdChange.append($tdChangeWrap);
  $tdCreateWrap.append($tdCreateDate, $tdCreateTime);
  $tdChangeWrap.append($tdChangeDate, $tdChangeTime);
  $tdChange2.append($tdChange2Link);
  $tdDelete.append($tdDeleteLink);
  $tdActionsWrap.append($tdChange2, $tdDelete);
  $tdActions.append($tdActionsWrap);

  $tdFIO.textContent = `${clientsObj.surname} ${clientsObj.name} ${clientsObj.lastName}`;
  $tdCreateDate.textContent = `${formatDate(new Date(clientsObj.createdAt))}`;
  $tdCreateTime.textContent = `${formatTime(new Date(clientsObj.createdAt))}`;
  $tdChangeDate.textContent = `${formatDate(new Date(clientsObj.updatedAt))}`;
  $tdChangeTime.textContent = `${formatTime(new Date(clientsObj.updatedAt))}`;
  $tdID.textContent = clientsObj.id;
  $tdChange2Link.textContent = 'Изменить';
  $tdDeleteLink.textContent = 'Удалить';

  $tdChange2Link.setAttribute('href', '#popup-change');
  $tdDeleteLink.setAttribute('href', '#popup-delete');

  let data = await serverGetClientsId(clientsObj.id);

  $tr.dataset.id = data.id;
  setData(data.id, $tdDeleteLink);
  setData(data.id, $tdChange2Link);

  const contacts = clientsObj.contacts;

  let i = 0;

  for (const contact of contacts) {
    let add = contactIcons[4];

    const $tooltip = document.createElement('span');
    const $tooltipBtn = document.createElement('button');
    const $tooltipText = document.createElement('span');
    const $tooltipLink = document.createElement('a');

    $tooltip.classList.add('tooltip');
    $tooltipBtn.classList.add('tooltip-btn');
    $tooltipBtn.classList.add('btn-reset');
    $tooltipText.classList.add('tooltip-text');
    $tooltipLink.classList.add('tooltip-link');

    $tooltipLink.innerHTML = `${contact.value}`;

    if (contact.type === 'Телефон' || contact.type === 'Доп. телефон') {
      $tooltipLink.setAttribute('href', `tel: ${$tooltipLink.innerHTML}`);
      mask();
      $tooltipLink.classList.add('tooltip-link--phone');
    } else if (contact.type === 'Email') {
      $tooltipLink.setAttribute('href', `mailto: ${$tooltipLink.innerHTML}`);
      $tooltipLink.classList.add('tooltip-link--mail');
    } else {
      $tooltipLink.setAttribute('href', `${$tooltipLink.innerHTML}`);
      $tooltipLink.setAttribute('target', '_blank');
    }

    const $tooltipCaption = document.createElement('span');
    $tooltipCaption.classList.add('tooltip-caption');
    $tooltipCaption.innerHTML = `${contact.type}:`;
    $tooltipText.append($tooltipCaption, $tooltipLink);

    for (let j = 0; j < 4; j++) {
      let obj = contactIcons[j];

      if (contact.type === 'Vk' || contact.type === 'Email' || contact.type === 'Facebook' || contact.type === 'Телефон') {
        if (contact.type === obj.type) {
          $tooltipBtn.innerHTML = `${obj.value}`;
        }
      } else {
        $tooltipBtn.innerHTML = `${add.value}`;
      }
    }

    $tooltip.append($tooltipBtn, $tooltipText);
    $tdContactsWrap.append($tooltip);
    i++;
  }

  await getClientsData(clientsObj, $tr, $tdChange2Link, contacts);
  await deleteClients(clientsObj, $tr, $tdDeleteLink);

  $tr.append($tdID, $tdFIO, $tdCreate, $tdChange, $tdContacts, $tdActions);

  return $tr
}

async function render(clients) {
  const $clientsTable = document.getElementById('clients-table');

  $clientsTable.innerHTML = '';

  for (const clientsObj of clients) {
    let $newTr = await getClients(clientsObj);

    $clientsTable.append($newTr);
  }

  getPopup();
  openContacts();
}

async function renderFirst(clients) {
  const $clientsTable = document.getElementById('clients-table');

  $clientsTable.innerHTML = `
    <div id="preloader" class="preloader">
      <div class="preloader__loader">
      </div>
    </div>
  `;

  for (const clientsObj of clients) {
    let $newTr = await getClients(clientsObj);

    $clientsTable.append($newTr);
  }

  getPopup();
  openContacts();
}

await renderFirst(clients);

function mask() {
  if (document.querySelector('.popup.open')) {
    let selectors = document.querySelectorAll("input[type='tel']");

    selectors.forEach(function (input) {
      if (input.getAttribute('type') === 'tel') {
        Inputmask("+7 (999) 999-99-99").mask(input);
      }
    });
  }
}

function removeMask() {
  if (document.querySelector('.popup.open')) {
    let selectors = document.querySelectorAll('.popup-contacts__input');

    selectors.forEach(function (input) {
      if (input.getAttribute('type') != 'tel') {
        Inputmask.remove(input);
      }
    });
  }
}

function getPopup() {
  const btns = document.querySelectorAll('.popup-btn');
  const body = document.body;
  const lockPadding = document.querySelectorAll('.lock-padding');
  let unlock = true;
  const timeout = 500;

  btns.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();

      const popupName = el.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
    });
  });

  const popupCloseIcon = document.querySelectorAll('.popup__close');

  popupCloseIcon.forEach(el => {
    el.addEventListener('click', (e) => {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  });

  function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');

      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
        body.classList.add('lock');
      }

      currentPopup.classList.add('open');

      currentPopup.addEventListener('click', e => {
        if (!(e.target.closest('.popup__content') || e.target.closest('.popup-contacts__form'))) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');

      if (doUnlock) {
        bodyUnLock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';

    lockPadding.forEach(el => {
      el.style.paddingRight = lockPaddingValue;
    });

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;

    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      lockPadding.forEach(el => {
        el.style.paddingRight = '0px';
      });

      body.style.paddingRight = '0px';
      body.classList.remove('lock');

      document.querySelectorAll('.popup__input').forEach(el => {
        el.value = '';
      });

      document.querySelectorAll('.popup-contacts').forEach(el => {
        el.remove();
      });

      document.querySelectorAll('.popup__area').forEach(area => {
        area.style.paddingTop = '8px';
        area.style.paddingBottom = '8px';
      });

      document.querySelectorAll('.popup-add').forEach(el => {
        el.classList.remove('popup-add--delete');
      });

      document.querySelectorAll('.popup__form input').forEach(input => {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
          parent.querySelector('.error-label').remove();
          parent.classList.remove('error');
        }
      });

    }, timeout);

    unlock = false;

    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
    }
  });
}

function getDropdown(dropdown, btn, contactsWrap) {
  btn.addEventListener('click', () => {
    const drops = document.querySelectorAll('.dropdown');
    const topText = dropdown.querySelector('.dropdown__text');
    const links = dropdown.querySelectorAll('.dropdown__link');

    drops.forEach(el => {
      if (el !== dropdown) {
        el.classList.remove('dropdown--active');
      }
    });

    dropdown.classList.toggle('dropdown--active');

    links.forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();

        topText.textContent = el.textContent;
        dropdown.classList.remove('dropdown--active');

        contactsWrap.querySelector('.popup-contacts__input').value = '';

        if (topText.textContent === 'Vk' || topText.textContent === 'Facebook' || topText.textContent ===
          'Другое') {
          dropdown.parentNode.querySelector('.popup-contacts__input').setAttribute('type', 'text');
          removeMask();
        } else if (topText.textContent === 'Телефон') {
          dropdown.parentNode.querySelector('.popup-contacts__input').setAttribute('type', 'tel');
          mask();
        } else if (topText.textContent === 'Email') {
          dropdown.parentNode.querySelector('.popup-contacts__input').setAttribute('type', 'mail');
          removeMask();
        }
      });
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.dropdown')) {
        drops.forEach(el => {
          el.classList.remove('dropdown--active');
        });
      }
    });
  });
}

function createNewContacts() {
  const btns = document.querySelectorAll('.popup-add');

  btns.forEach(btn => {
    btn.addEventListener('click', function click() {
      const area = btn.closest('.popup__area');
      const wrap = area.querySelector('.popup__contacts-wrap');
      area.prepend(wrap);

      area.style.paddingTop = '25px';
      area.style.paddingBottom = '25px';
      const contactsWrap = document.createElement('div');
      contactsWrap.classList.add('popup__contacts');
      contactsWrap.classList.add('popup-contacts');
      contactsWrap.classList.add('input-parent');
      contactsWrap.innerHTML = contacts;
      wrap.append(contactsWrap);

      if (contactsWrap.querySelector('.dropdown__text').textContent === 'Телефон') {
        mask();
      } else {
        removeMask();
      }

      const dropdowns = contactsWrap.querySelectorAll('.dropdown');

      const wraps = document.querySelectorAll('.popup-contacts');

      dropdowns.forEach(dropdown => {
        wraps.forEach(el => {
          el.querySelector('.popup-contacts__delete').addEventListener('click', () => {
            el.remove();

            if (wrap.innerHTML === '') {
              area.style.paddingTop = '8px';
              area.style.paddingBottom = '8px'
            }
          });
        });

        const top = dropdown.querySelector('.dropdown__top');
        getDropdown(dropdown, top, contactsWrap);
      });

      if (document.querySelectorAll('.dropdown').length >= 10) {
        btn.classList.add('popup-add--delete');
        removeEventListener('click', click);
      }
    });
  });
}

createNewContacts();

function openContacts() {
  const wrap = document.querySelectorAll('.table__td-wrap');

  wrap.forEach(el => {
    const tooltips = el.querySelectorAll('.tooltip');

    if (tooltips.length > 5) {
      tooltips.forEach(tooltip => {
        tooltip.classList.add('tooltip--hidden');
      });

      const $btnCount = document.createElement('button');
      $btnCount.classList.add('tooltip-add');
      $btnCount.classList.add('btn-reset');
      const count = tooltips.length - 4;
      $btnCount.textContent = `+${count}`;
      el.append($btnCount);

      $btnCount.addEventListener('click', () => {
        tooltips.forEach(tooltip => {
          tooltip.classList.remove('tooltip--hidden');
        });

        $btnCount.classList.add('tooltip-add--remove');
      });
    }

  });
}

function validation(form) {
  function deleteError(input) {
    const parent = input.closest('.input-parent');

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove();
      parent.classList.remove('error');
    }
  }

  function createError(input, text) {
    const parent = input.closest('.input-parent');
    const errorLabel = document.createElement('label');

    errorLabel.textContent = text;
    errorLabel.classList.add('error-label');
    parent.classList.add('error');

    parent.append(errorLabel);
  }

  let result = true;

  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    deleteError(input);

    input.addEventListener('input', () => {
      if (input.getAttribute('type') === 'tel') {
        let arr = String(input.value);
        let value = '';
        for (let index in arr) {
          if (isNaN(arr[index]) != true && arr[index] != ' ') {
            value += Number(arr[index]);
          }
        }

        if (value.length < 11) {
          deleteError(input);
          createError(input, 'Введите номер целиком!');
          result = false;
        } else {
          deleteError(input);
        }
      }

      if (input.dataset.required === 'true' && input.getAttribute('type') != 'tel') {
        if ((input.value).trim() === '') {
          deleteError(input);
          createError(input, 'Поле не заполнено');
          result = false;
        } else {
          deleteError(input);
        }
      }

      if (input.dataset.required === 'true' && input.getAttribute('type') === 'tel') {
        if ((input.value).trim() === '') {
          deleteError(input);
          createError(input, 'Поле не заполнено');
          result = false;
        }
      }
    });

    if (input.getAttribute('type') === 'tel') {
      let arr = String(input.value);
      let value = '';
      for (let index in arr) {
        if (isNaN(arr[index]) != true && arr[index] != ' ') {
          value += Number(arr[index]);
        }
      }

      if (value.length < 11) {
        deleteError(input);
        createError(input, 'Введите номер целиком!');
        result = false;
      }
    }

    if (input.dataset.required === 'true') {
      if ((input.value).trim() === '') {
        deleteError(input);
        createError(input, 'Поле не заполнено');
        result = false;
      }
    }
  });

  return result
}

function addContacts(newClientsObj) {
  const keys = [];
  const values = [];
  let arrObj = [];

  document.querySelectorAll('.dropdown__text').forEach(el => {
    const e = el.textContent;
    keys.push(e);
  });

  document.querySelectorAll('.popup-contacts__input').forEach(el => {
    const value = el.value;
    values.push(value);
  });

  for (let i = 0; i < values.length; i++) {
    let obj = {};

    const key = keys[i];
    const value = values[i];

    obj['type'] = key;
    obj['value'] = value;
    arrObj.push(obj);
  }

  newClientsObj.contacts = arrObj;
}

const input = document.querySelector(`[data-filter="true"]`);

async function saveClients() {
  const popup = document.querySelector('.popup--add');

  if (popup) {
    const form = popup.querySelector('.popup__form');

    form.addEventListener('submit', async event => {
      event.preventDefault();

      const newClientsObj = {
        name: (document.getElementById('name').value).trim(),
        surname: (document.getElementById('surname').value).trim(),
        lastName: (document.getElementById('lastname').value).trim(),
        contacts: []
      }

      addContacts(newClientsObj);

      const $cancel = popup.querySelector('.popup-cancel');

      $cancel.addEventListener('click', e => {
        e.preventDefault();

        popup.classList.remove('open');
        setTimeout(close, 500);
      });

      let serverDataObj = await serverAddClients(newClientsObj);

      if (validation(form) === true) {
        let serverData = await serverGetClients();
        clients = serverData;

        const fio = input.value.trim();
        clientsCopy = filter(clientsCopy, 'fio', fio);

        clientsCopy.push(serverDataObj);

        for (const clientObj of clients) {
          clientObj.fio = getFIO(clientObj);
        }

        await render(clientsCopy);

        document.querySelector('.popup.open').classList.remove('open');

        popup.querySelectorAll('.popup-contacts').forEach(el => {
          el.remove();
        });

        setTimeout(close, 500);
      }
    });
  }
}

saveClients();

async function updateClients() {
  const popup = document.querySelector('.popup--change');

  if (popup) {
    const form = popup.querySelector('.popup__form');

    form.addEventListener('submit', async event => {
      event.preventDefault();

      const newClientsObj = {
        name: (document.getElementById('name-change').value).trim(),
        surname: (document.getElementById('surname-change').value).trim(),
        lastName: (document.getElementById('lastname-change').value).trim(),
        contacts: []
      }

      addContacts(newClientsObj);

      newClientsObj.id = popup.dataset.number;

      await serverUpdateClients(newClientsObj, newClientsObj.id);

      if (validation(form) === true) {
        let serverData = await serverGetClients();

        clients = serverData;
        clientsCopy = clients;

        for (const clientObj of clients) {
          clientObj.fio = getFIO(clientObj);
        }

        await render(clients);

        document.querySelector('.popup.open').classList.remove('open');

        popup.querySelectorAll('.popup-contacts').forEach(el => {
          el.remove();
        });

        setTimeout(close, 500);
      }
    });
  }
}

await updateClients();

function filter(arr, prop, value) {
  const result = [];

  for (const item of arr) {
    if (String(item[prop]).includes(value) === true) {
      result.push(item);
    }
  }

  return result
}

input.addEventListener("keypress", event => {
  const value = event.keyCode;
  if (!((value >= 1040 && value <= 1103) || event.key == ' ' || event.key == '-')) {
    event.preventDefault();
  }
});

input.addEventListener('input', async event => {
  event.preventDefault();

  let serverData = await serverGetClients();

  clients = serverData;

  for (const clientObj of clients) {
    clientObj.fio = getFIO(clientObj);
  }

  const fio = input.value.trim();
  clientsCopy = clients;
  clientsCopy = filter(clientsCopy, 'fio', fio);

  setTimeout(render, 300, clientsCopy);
});

function filtration() {
  const popups = document.querySelectorAll('.popup');

  popups.forEach(popup => {
    if (popup) {
      const inputs = popup.querySelectorAll('.popup__input');

      inputs.forEach(input => {
        input.addEventListener("keypress", event => {
          const value = event.keyCode;
          if (!((value >= 1040 && value <= 1103) || event.key == ' ' || event.key == '-')) {
            event.preventDefault();
          }
        });

        input.addEventListener('blur', () => {
          let inputValue = input.value.trim().replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/^[\-+\s+]$[\-+\s+]/g, '').trim();

          if (inputValue[0] === '-') {
            inputValue = '' + inputValue.slice(1);
          }

          if (inputValue[inputValue.length - 1] === '-') {
            inputValue = inputValue.slice(0, -1);
          }

          if (inputValue !== '') {
            input.value = inputValue[0].toUpperCase() + inputValue.substring(1).toLowerCase();
          }
        });
      });
    }
  });
}

filtration();

function getSortClients(prop, dir) {
  for (const clientObj of clients) {
    clientObj.fio = getFIO(clientObj);
  }

  const fio = input.value.trim();
  clientsCopy = clients;

  clientsCopy = filter(clientsCopy, 'fio', fio);

  return clientsCopy.sort((a, b) => {
    if ((!dir === false ? a[prop] < b[prop] : a[prop] > b[prop]))
      return -1;
  });
}

const $headings = document.querySelectorAll('thead th');

for (let i = 0; i < 4; i++) {
  $headings[i].addEventListener('click', async e => {
    e.preventDefault();

    let arrow = $headings[i].querySelector('.table__arrow');
    let letters = $headings[i].querySelector('.table__letters');
    arrow.classList.toggle('table__arrow--transform');

    if (letters) {
      letters.classList.toggle('table__letters--transform');
    }

    if (i === 0) {
      clientsCopy = getSortClients('id', false);

      if (arrow.classList.contains('table__arrow--transform')) {
        clientsCopy = getSortClients('id', true);
      }
    }

    if (i === 1) {
      clientsCopy = getSortClients('fio', false);

      if (arrow.classList.contains('table__arrow--transform')) {
        clientsCopy = getSortClients('fio', true);
      }
    }

    if (i === 2) {
      clientsCopy = getSortClients('createdAt', false);

      if (arrow.classList.contains('table__arrow--transform')) {
        clientsCopy = getSortClients('createdAt', true);
      }
    }

    if (i === 3) {
      clientsCopy = getSortClients('updatedAt', false);

      if (arrow.classList.contains('table__arrow--transform')) {
        clientsCopy = getSortClients('updatedAt', true);
      }
    }

    await render(clientsCopy);
  });
}



