const host = "http://localhost:1337";

$(Document).ready(() => {
    let url = window.location;
    // console.log(`>>>> ready, url: ${url}, id: ${$.urlParam("id")}`);
    var id = $.urlParam('id');
    renderBlog(id);
  });

  $.urlParam = function (name) {
    var results = new RegExp("[\?&]" + name + "=([^&#]*)").exec(
      window.location.href
    );
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  };
  const renderBlog = async (id) => {
    // console.log("check from renderblog",id);
    try{
        await fetch(`${host}/api/Posts/${id}?populate=*`).then(
            res => {
                return res.json();
            }
        ).then(
            data => {
                const json = JSON.parse(data.data.attributes.content);
                const dt = data.data.attributes.content;
                console.log("check json",json);
                const edjsParser = edjsHTML();

                let html = edjsParser.parse(json);
              
                console.log(html);
                document.getElementById("main-post").innerHTML = html;
            }
        )
    }catch(e){
        console.log(e);
    }
  }