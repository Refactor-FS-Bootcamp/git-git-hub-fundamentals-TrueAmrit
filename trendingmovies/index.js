// require('dotenv').config();
// const urlM=`http://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`
// console.log(process.env)
async function getData() {
    try {
        // var rawdata = await fetch(urlM)
        var rawdata = await fetch("http://api.themoviedb.org/3/trending/all/week?api_key=9fcf7a3dcf6947a420682da4c7f85220&language=en-US")
        var data = await rawdata.json()
        // console.log(data.results[0].first_air_date, typeof (data.results))
        // var postdata = data.resutls;
        // console.log(postdata)
        for (let i = 0; i < 20; i++) {
            var poster = "https://image.tmdb.org/t/p/w154/" + data.results[i].poster_path
            if (data.results[i].name) {
                // console.log(poster)
                document.getElementById("tittle" + i).innerHTML = data.results[i].name
                document.getElementById("release_date" + i).innerHTML = "First Release: " + data.results[i].first_air_date
                document.getElementById("desc" + i).innerHTML = data.results[i].overview
                document.getElementById("poster" + i).src = poster
            }
            else {
                document.getElementById("tittle" + i).innerHTML = data.results[i].title
                document.getElementById("desc" + i).innerHTML = data.results[i].overview
                document.getElementById("poster" + i).src = poster
                document.getElementById("release_date" + i).innerHTML = "First Release: " + data.results[i].release_date

            }
        }
    }
    catch (error) {
        alert("Something went wrong", error)
        console.log(error)
    }
}
getData();
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
var currentDate = `${day}-${month}-${year}`;
document.getElementById("date").innerHTML = "Dated:" + currentDate;

var items = document.getElementById('cards_wrap');
items.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target.id);
    localStorage.setItem('value_id', e.target.id);
    if (e.target.id == "detail0" || e.target.id == "detail1" || e.target.id == "detail2" || e.target.id == "detail3" || e.target.id == "detail4" || e.target.id == "detail5" || e.target.id == "detail6" || e.target.id == "detail7" || e.target.id == "detail8" || e.target.id == "detail9" || e.target.id == "detail10" || e.target.id == "detail11" || e.target.id == "detail12" || e.target.id == "detail13" || e.target.id == "detail14" || e.target.id == "detail15" || e.target.id == "detail16" || e.target.id == "detail17" || e.target.id == "detail18" || e.target.id == "detail19") {
        window.location.href = "/details.html";
    }
});
