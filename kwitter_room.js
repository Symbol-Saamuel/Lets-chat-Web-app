user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome"+user_name+"!"
var firebaseConfig = {
      apiKey: "AIzaSyAa73Y-3k6CrZjTJi6N77wRMGc4suT4Od4",
      authDomain: "class-test-72d00.firebaseapp.com",
      databaseURL: "https://class-test-72d00-default-rtdb.firebaseio.com",
      projectId: "class-test-72d00",
      storageBucket: "class-test-72d00.appspot.com",
      messagingSenderId: "69027156937",
      appId: "1:69027156937:web:d91231cb55a573102fce18"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
    
          localStorage.setItem("room_name", room_name);
    
          window.location = "kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"
+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;      
      });});}
getData();

function redirectToRoomName(name)
{

console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";

}