var audio=document.getElementById("audio");
var playlist=['Track 1.mp3','Track 2.mp3','Track 3.mp3','Track 4.mp3'];
var playlist_index=0;
var Playlist_area=document.getElementById("playlist_area");
var tracks=document.getElementsByClassName("Tracks");
var left_button=document.getElementById("left_button");
var right_button=document.getElementById("right_button");
var newPlaylist;
window.onload=playlistUpdate;
function playlistUpdate()
{

  for(var i=0;i<playlist.length;i++)
  {
	var newEle=document.createElement("h2");
	var printInfo="" + (i+1) +" :- "+ playlist[i];
	printInfo=""+printInfo;
	var textNode=document.createTextNode(printInfo);
	newEle.appendChild(textNode);
	newEle.classList.add("Tracks");
	playlist_area.appendChild(newEle);
  }
  audio.loop=false;
  audio.autoplay=true;
  audio.src="audio/"+playlist[0];
  tracks[0].style.backgroundColor="grey";
}

left_button.addEventListener("click",switchTrackLeft);
right_button.addEventListener("click",switchTrackRight);
audio.addEventListener("ended",switchTrackRight);
function switchTrackRight()
{

	if(playlist_index==(playlist.length-1))
	{
		tracks[playlist_index].style.backgroundColor="rgb(181, 38, 38)";
		playlist_index=0;
	}
	else
	{
		playlist_index++;
		tracks[playlist_index-1].style.backgroundColor="rgb(181, 38, 38)";
	}
	tracks[playlist_index].innerHTML="" + (playlist_index+1) +" :- "+ playlist[playlist_index];
	tracks[playlist_index].style.backgroundColor="grey";
	audio.src="audio/"+playlist[playlist_index];
}
function switchTrackLeft()
{
	if(playlist_index==0)
	{
		tracks[playlist_index].style.backgroundColor="rgb(181, 38, 38)";
		playlist_index=playlist.length-1;
	}
	else
	{
		tracks[playlist_index].style.backgroundColor="rgb(181, 38, 38)";
		playlist_index=playlist_index-1;
	}
	tracks[playlist_index].innerHTML="" + (playlist_index+1) +" :- "+ playlist[playlist_index];
	tracks[playlist_index].style.backgroundColor="grey";
	audio.src="audio/"+playlist[playlist_index];
}
////////////Drag And Drop Tracks
var dropArea=document.getElementById("wrapper");
dropArea.addEventListener("dragenter",function(e){e.preventDefault(); this.className="over"; });
dropArea.addEventListener("dragover",function(e){e.preventDefault(); this.className="over"});
dropArea.addEventListener('dragleave', function(e) {e.preventDefault();this.className = "";});
dropArea.addEventListener('drop', function(e) {
  e.preventDefault(); 
  this.className = "";
  var data = e.dataTransfer.getData("audio/mpeg");
  var newSong=e.dataTransfer.files[0].name;
  newSong=""+newSong;
  playlist.push(newSong);
  playlistUpdate2();
  function playlistUpdate2()
  {
  	var newEle=document.createElement("h2");
  	var printInfo="" + (playlist.length) +" :- "+ playlist[playlist.length-1];
	printInfo=""+printInfo;
	var textNode=document.createTextNode(printInfo);
	newEle.appendChild(textNode);
	newEle.classList.add("Tracks");
	playlist_area.appendChild(newEle);
    tracks[playlist_index].style.backgroundColor="rgb(181, 38, 38)";
    playlist_index=playlist.length-2;
    switchTrackRight();
  }

});



