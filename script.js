let contain = document.querySelector('.contain')
let apiData = 0
const displayTestimonial=(data)=>{
    contain.innerHTML=`<div class="card p-3">
    <div class="image">
        <img src="${data[0].avatar}" alt="">
    </div>
    <div class="card-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae accusamus non voluptate maxime perspiciatis, eligendi minus sint officiis ipsam.</p>
        <div class="play">
            <div class="btn btn-outline-success">play audio</div>
        </div>
    </div>
    <div class="card-btn d-flex justify-content-between"  >
        <button class="btn">prev</button>
        <button class="btn">next</button>
    </div>
</div>`
}

let endpoint = 'https://testimonialapi.toolcarton.com/api'
fetch(endpoint)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    displayTestimonial(data)
})