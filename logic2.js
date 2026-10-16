const userIid = localStorage.getItem("userId");
const dontdisplay = document.querySelector(".notshow");
const userinfo = document.querySelector(".user-info");
const auth = document.querySelector(".auth");


if (!userIid) {
  if (dontdisplay) dontdisplay.style.display = "none";
  if (userinfo) userinfo.style.display = "none";
  
  
}

if (userIid){
    if (auth) auth.style.display = "none";
}