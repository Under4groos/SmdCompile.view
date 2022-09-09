function SetElement_onclick(str_name, str_url) {
    var element_ = document.getElementById(str_name);

    element_.onclick = function() {

        window.open(str_url, '_blank');
    }
    return element_
}


fetch('https://api.github.com/repos/Under4groos/SmdCompile.view/releases', {
        headers: new Headers({
            'User-agent': 'Mozilla/4.0 Custom User Agent'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (!data || !data[0])
            return
        SetElement_onclick("last_ver", data[0]["html_url"]).textContent = data[0]["tag_name"]
        SetElement_onclick("but_view_demo", data[0]["assets"][0]["browser_download_url"])
        SetElement_onclick("but_buy", "https://vk.com/underko")
    })
    .catch(error => console.error(error))