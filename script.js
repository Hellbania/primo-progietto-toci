console.log("hello");

(function(){
  const path = location.pathname.split("/").pop();
  if (path === "me.html") {
    console.log("hello");
    alert("hello");
  }
})();