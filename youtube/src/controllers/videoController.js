const fakeUser = {
    username: "Moincoar",
    loggedIn: false,
}

export const trending = (req, res) => {
    const videos = [
        {
            title: "Video #1",
            rating: 5,
            commens: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1
        },
        {
            title: "Video #2",
            rating: 5,
            commens: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 2
        },
        {
            title: "Video #3",
            rating: 5,
            commens: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 3
        }
    ];
    return res.render("home", { pageTitle: "Home!", videos });
}
export const watch = (req, res) => res.render("watch", { pageTitle: "Watch Video" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit Video" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send(`Delete Video #${req.params.id}`);
}