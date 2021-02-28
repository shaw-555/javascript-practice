const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");
const moreButton = document.querySelector('#more button');
console.log(moreButton);

const apiURL = "https://api.lyrics.ovh";

// serachSongs function
async function searchSongs(term){
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    
    showData(data);
}

// show info of songs on the DOM
function showData(data){
        let output = "";
        data.data.forEach(song => {
        output += `
            <li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist ="${song.artist.name}" data-songtitle ="${song.title}">歌词</button>
            </li>
            `;
        });

        result.innerHTML = `
        <ul class="songs">
        ${output}
        </ul>
        `;

        if (data.prev || data.next) {
            more.innerHTML = `${
              data.prev
                ? `<button class="btn" onclick = "getMoreSongs('${data.prev}')">上一页</button>`
                : ""
            }
                  ${
                    data.next
                      ? `<button class="btn" onclick = "getMoreSongs('${data.next}')">下一页</button>`
                      : ""
                  }
                  `;
          } else {
            more.innerHTML = "";
          }
}

async function getMoreSongs(url){
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await res.json();

    showData(data);
}

async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();
  
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");
    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2> <span>${lyrics}</span>`;
  
    more.innerHTML = "";
}

async function moreSong(url){
    // const res = await fetch(url);
    // const data = await res.json();
    
    // console.log(data);
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const searchTerm = search.value.trim();
    
    if(!searchTerm){
        alert("请输入内容");
    }else {
        searchSongs(searchTerm);
    }
});


result.addEventListener("click", e => {
    const clickedEl = e.target;
    console.log(clickedEl);
    if (clickedEl.tagName === "BUTTON") {
      const artist = clickedEl.getAttribute("data-artist");
      const songTitle = clickedEl.getAttribute("data-songtitle");
  
      getLyrics(artist, songTitle);
    }
  });