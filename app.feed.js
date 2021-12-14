app.feed("/date", function (req, res){

    res.render("date")

    return res.status(200).json({ data: feed, post });

})




app.feed("/photo", function (req, res){

    res.render("photo")

    return res.status(200).json({ data: feed, post });

})


app.feed("/user-profile photo", function (req, res){

    res.render("user-profile photo")

    return res.status(200).json({ data: feed, post });

})



app.feed("/report", function (req, res){

    res.render("report")

    return res.status(200).json({ data: user, post });

})



app.feed("/like", function (req, res){

    res.render("like")

    return res.status(200).json({ data: feed, post });

})


app.feed("/dislike", function (req, res){

    res.render("dislike")

    return res.status(200).json({ data: feed, post });

})


