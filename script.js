let time_remaining = 0;
let selected_user = null;
let valid_image = /.*\.(png|svg|jpg|jpeg|bmp)$/i;

// when greeter ask for login prompt this method called
function show_prompt(text) {
  let password_container = document.querySelector("#password_container");
  let password_entry = document.querySelector("#password_entry");

  if (!isVisible(password_container)) {
    let users = document.querySelectorAll(".user");
    let user_node = document.querySelector("#" + selected_user);
    let react = user_node.getClientRects()[0];
    let parentRect = user_node.getClientRects()[0];
    let center = parentRect.width / 2;
    let left = center - rect.width / 2 - rect.left;
    let i = 0;
    if (left < 5 && left > -5) {
      left = 0;
    }
    for (i = 0; i < users.length; i++) {
      let node = users[i];
      setVisible(node, node.id === selected_user);
      node.style.left = left;
    }
    setVisible(password_container, true);
    password_entry.placeholder = text.replace(":", "");
  }
  password_entry.value = "";
  password_entry.focus();
}

// called when greeter ask for showing message
function show_message(text) {
  let message = document.querySelector("#message_content");
  message.innerHTML = text;
  if (text) {
    document.querySelector("#message").classList.remove("hidden");
  } else {
    document.querySelector("#message").classList.add("hidden");
  }
  message.classList.remove("error");
}

// called when greeter ask for error
function show_error(text) {
  show_message(text);
  let message = document.querySelector("#message_content");
  message.classList.add("error");
}

// called when greeter complete authentication request
function authentication_complete() {
  let container = document.querySelector("#session_container");
  let children = container.querySelectorAll("input");
  let i = 0;
  let key = "";
  for(i = 0; i < children.length; i++){
    let child = children[i];
    if(child.checked){
      key = child.value;
      break;
    }
  }

  if(lightdm.is_authenticated){
    if(key === ""){
      lightdm.login(lightdm.authentication_user, lightdm.default_session);
    }else{
      lightdm.login(lightdm.authentication_user, key);
    }
  }else{
    show_error("Authentication Failed");
    start_authentication(selected_user);
  }
}

// called then greeter wants to timed login
function timed_login(user) {
  lightdm.login(lightdm.timed_login_user);
}

// implemation of authentication
function start_authentication(username) {
  
}

function provide_secret() {}

function initialize_sessions() {}

function show_users() {}

function user_clicked(event) {}

function setVisible(element, visible) {}

function isVisible(element) {}

function update_time() {}

function initialize() {}

function on_image_error(e) {}

function initialize_users() {}

function initialize_timer() {}

function add_action(id, name, image, clickhander, template, parent) {}
