export function auth(req, res, next) {
    console.log(req.session)

    if (!req.session.user) {
        var err = new Error("You are not authenticated!")
        res.status = 403
        return res.send(err)
    } 
    else {
        if (req.session.user === "success") {
            next()
        } else {
            var err = new Error("You are not authenticated!")
            res.status = 403
            return res.send(err)
        }
    }
}
