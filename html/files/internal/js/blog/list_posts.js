async function getList() {
    let response = await fetch("http://" + hostname + ":3000/api/blog_post_list");
    response = await response;
    let list = await response.json();
    return list;
}

let list = getList();
(async () => {
    list = await list;
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    for (let i = 1; i <= list.posts; i++) {
        let tr = document.createElement("tr");
        let number = document.createElement("td");
        let link = document.createElement("td");
        let linka = document.createElement("a");
        let numberp = document.createElement("p");
        let numberText = document.createTextNode(i.toString());
        let linkText = document.createTextNode(list[i].name);
        linka.setAttribute("href", list[i].path);
        linka.appendChild(linkText);
        numberp.appendChild(numberText);
        number.appendChild(numberp);
        link.appendChild(linka);
        tr.appendChild(number);
        tr.appendChild(link);
        tbody.appendChild(tr)
    }
    table.appendChild(tbody);
    document.getElementById("post_table").replaceWith(table);
})()