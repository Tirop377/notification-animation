
const notification = document.querySelector('.shell')
const notifyIcon = document.getElementById('note')
const usersContainer = document.querySelector("#users-Container");
let notificatonNum = 2
let users = ["Kevin Biwott", "James Mutemi"];

setTimeout( () => {
  notification.classList.add('translated')
}, 2000)


setTimeout( () => {
  notification.style.width = '100%'
  notification.classList.add('chageBg')
  notifyIcon.style.backgroundImage = 'none'
  const title = document.createElement('span')
  title.innerText = `${notificatonNum} Notifications`
  setTimeout(()=>{
    notification.appendChild(title);
    renderNotification();
  }, 500)
  title.classList.add('notificationMessage');
}, 4200)



function renderNotification() {
  let userHtml = "";
  for (const name of users) {
    userHtml += `
                <div class="user">
                <div class="userIcon"> 
                    <span class="material-symbols-outlined personIcon">
                    person_add
                    </span>
                </div>
                <div class="message">
                    <span>${name}</span>
                    <br>
                    <span>followed you</span>
                </div>
            </div>
    `;
  
  }
  
  usersContainer.innerHTML = userHtml;
  usersContainer.classList.add("usersContainer");
  usersContainer.classList.remove("displayNone");
}