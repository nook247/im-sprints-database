/* eslint-disable no-console */
// eslint-disable-next-line
const app = {
  server: 'http://127.0.0.1:3000/classes/messages',
  data: [],
  rooms: [],
  currentRoomIndex: 0,
  username: '',
  init: () => {
    app.fetch(app.updateRoomList);
    setInterval(app.refreshChats, 1000);
    var sendChatBtn = document.querySelector('#send-chat-btn');
    sendChatBtn.onclick = app.sendChat;

    var sendChatInput = document.querySelector('#chat-input');
    sendChatInput.onkeydown = function(event) {
      if (event.keyCode === 13) {
        app.sendChat();
      }
    };

    var usernameInput = document.querySelector('#username-input');
    usernameInput.onclick = () => {
      if (usernameInput.value === '') {
        app.username = 'guest';
      } else {
        app.username = usernameInput.value;
      }
      app.renderUserName();
    };

    var creatRoom = document.querySelector('#create-room-btn');
    creatRoom.onclick = app.createRoom;

    var select = document.querySelector('#room-select');
    select.onchange = app.updateRoomList;

    var changeUserNameBTN = document.querySelector('#change-user-name');
    changeUserNameBTN.onclick = app.changeUserName;
  },
  fetch: callback => {
    window
      .fetch(app.server, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then(json => {
        app.data = json;
        if (callback !== undefined) {
          callback();
        }
      });
  },
  send: message => {
    window
      .fetch(app.server, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.json();
      });
  },
  clearMessages: () => {
    document.querySelector('#chats').innerHTML = '';
  },
  renderMessage: message => {
    var wrapper = document.createElement('div');
    var usernameDiv = document.createElement('div');
    var textDiv = document.createElement('div');
    var roomnameDiv = document.createElement('div');
    var dateDiv = document.createElement('div');

    wrapper.className = 'chat';

    document.querySelector('#chats').appendChild(wrapper);
    wrapper.appendChild(usernameDiv);
    wrapper.appendChild(textDiv);
    wrapper.appendChild(roomnameDiv);
    wrapper.appendChild(dateDiv);

    usernameDiv.textContent = message.username;
    textDiv.textContent = message.text;
    roomnameDiv.textContent = message.roomname;
    dateDiv.textContent = message.date;

    usernameDiv.className = 'username';
    textDiv.className = 'text';
    roomnameDiv.className = 'roomname';
    dateDiv.className = 'date';
  },
  updateRoomList: () => {
    let select = document.querySelector('#room-select');
    let index = select.selectedIndex;
    if (index === -1) {
      app.currentRoomIndex = 0;
    } else {
      app.currentRoomIndex = index;
    }

    for (let i = 0; i < app.data.length; i++) {
      if (app.rooms.indexOf(app.data[i].roomname) === -1) {
        app.rooms.push(app.data[i].roomname);
      }
    }

    select.textContent = '';
    app.rooms.forEach((roomname, index) => {
      let option = document.createElement('option');
      option.value = roomname;
      option.textContent = roomname;

      if (index === app.currentRoomIndex) {
        option.selected = true;
      }
      select.appendChild(option);
    });
  },
  refreshChats: () => {
    app.fetch();
    document.querySelector('#chats').textContent = '';
    var currentRoomname = document.querySelector('#room-select').value;

    for (var i = app.data.length - 1; i >= 0; i--) {
      if (app.data[i].roomname === currentRoomname) {
        app.renderMessage(app.data[i]);
      }
    }
  },
  sendChat: (e, text) => {
    if (text === undefined) {
      text = document.querySelector('#chat-input').value;
    }
    var info = {
      username: app.username,
      message: text,
      roomname: document.querySelector('#room-select').value
    };
    app.send(info);

    document.querySelector('#chat-input').value = '';
  },
  createRoom: () => {
    var roomName = document.querySelector('#roomname-input').value;
    app.rooms.push(roomName.value);

    var select = document.querySelector('#room-select');

    let option = document.createElement('option');
    option.value = roomName;
    option.textContent = roomName;
    option.selected = true; 
    select.appendChild(option);

    app.currentRoomIndex = app.rooms.length - 1;
    app.sendChat(null, '새로운 룸이 생성되었습니다');
  },
  renderUserName: () => {
    var userName = document.querySelector('#user-name');

    userName.textContent = `안녕하세요! ${app.username} 님`;
  },
  changeUserName: () => {
    app.username = document.querySelector('#username-input').value;
    app.renderUserName();
  }
};

app.init();
