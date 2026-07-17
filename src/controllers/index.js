const showHomePage  = async (req, res) => {
    const title = 'HOME'
    res.render('home', {title})
}

export { showHomePage  }