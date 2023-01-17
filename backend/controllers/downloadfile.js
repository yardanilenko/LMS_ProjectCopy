

exports.downloadfile = async (req, res) => {
    try {
        const file = `files/${req.params.id}`
        res.download(file);
        console.log(a)
      } catch (error) {
          console.log('ERROR LIST==>', error.message);
          console.log(req.params)
      }
}