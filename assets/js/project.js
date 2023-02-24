let projects = []

function getData(event){
    event.preventDefault()

    let name = document.getElementById("input-project-name").value
    let sdate = document.getElementById("input-project-star").value
    let edate = document.getElementById("input-project-end").value
    let description = document.getElementById("input-project-content").value
    let checkbox1 = document.getElementById('checkbox1').checked
    let checkbox2 = document.getElementById('checkbox2').checked
    let checkbox3 = document.getElementById('checkbox3').checked
    let checkbox4 = document.getElementById('checkbox4').checked
    let images = document.getElementById("input-blog-image").files
    
    
    images = URL.createObjectURL(images[0])

    let data={
        name,
        sdate,
        edate,
        images,
        description,
        checkbox1,
        checkbox2,
        checkbox3,
        checkbox4,
    }
    document.getElementById("checkbox1").addEventListener("change", function() {
        if(this.checked) {
            let icon = document.createElement("i");
            icon.classList.add("fa", "fa-node");
            document.getElementById("blog-cheksbox").appendChild(icon);
        } else {
            document.getElementById("blog-cheksbox").innerHTML = "";
        }
    });
    
    document.getElementById("checkbox2").addEventListener("change", function() {
        if(this.checked) {
            let icon = document.createElement("i");
            icon.classList.add("fa", "fa-react");
            document.getElementById("blog-cheksbox").appendChild(icon);
        } else {
            document.getElementById("blog-cheksbox").innerHTML = "";
        }
    });

    document.getElementById("checkbox3").addEventListener("change", function() {
        if(this.checked) {
            let icon = document.createElement("i");
            icon.classList.add("fa", "fa-node-js");
            document.getElementById("blog-cheksbox").appendChild(icon);
        } else {
            document.getElementById("blog-cheksbox").innerHTML = "";
        }
    });
    
    document.getElementById("checkbox4").addEventListener("change", function() {
        if(this.checked) {
            let icon = document.createElement("i");
            icon.classList.add("fa", "fa-js");
            document.getElementById("blog-cheksbox").appendChild(icon);
        } else {
            document.getElementById("blog-cheksbox").innerHTML = "";
        }
    });

    projects.push(data)
    console.log(projects)
    showdata()
}

const showdata = () => {
    document.getElementById("contents").innerHTML = ''
    for(let i = 0; i < projects.length; i++){
    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${projects[i].images}" alt="" />
          </div>
          <div class="blog-content">
          <h1>
          <a href="blog-detail.html" target="_blank"
          >${projects[i].name}</a
              >
            </h1>
            <div class="detail-blog-content">
              Durasi:3 Bulan
            </div>
            <p>
              ${projects[i].description}
            </p>
            <div class="blog-cheksbox">
                ${ projects[i].checkbox1 ? '<i class="fab fa-node icon-custom"></i>' : ''}
                ${ projects[i].checkbox2 ? '<i class="fab fa-react icon-custom"></i>' : ''}
                ${ projects[i].checkbox3 ? '<i class="fab fa-node-js icon-custom"></i>' : ''}
                ${ projects[i].checkbox4 ? '<i class="fab fa-js icon-custom"></i>' : ''}         
            </div>
                <div class="btn-group">
                  <button class="btn-edit">Edit Post</button>
                  <button class="btn-post">Post Blog</button>
                </div>
          </div>
        </div>`
    }
}