fetch("nav.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load navigation");
        }

        return response.text();
    })
    .then(html => {
        document.getElementById("site-header").innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });

    fetch("footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load footer");
        }

        return response.text();
    })
    .then(html => {
        document.getElementById("site-footer").innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });