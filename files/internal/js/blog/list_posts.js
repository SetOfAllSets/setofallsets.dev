async function getList() {
    let response = await fetch("http://" + hostname + ":3000/api/blog_post_list");
    response = await response;
    let list = await response.json();
    return list;
}

let list = getList();
(async () => {
    list = await list;
    let html = document.createElement('table');
    for (let i = 1; i <= list.posts; i++) {
        console.log(list[i].path)
        document.createElement("tr");
        document.createElement("th");
        
        html.innerHTML += "<tr><th>" + i.toString() + "</th><th><a href=\"" + list[i].path + "\">" + list[i].name + "</a></th></tr>\n"
    }
    document.getElementById("post_table").replaceWith(html);
})()
