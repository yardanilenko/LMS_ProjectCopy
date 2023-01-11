// const {Flight} = require('../db/models/index');

// const renderProfile = async (req, res) => {
//     const userId = req.session.userId 
//     try {
//         const flights = await Flight.findAll({where: {
//             user_id: userId }} );
//         const nameCurrentUser = req.session?.nameCurrentUser
//         if (nameCurrentUser){
//             render(Profile, {nameCurrentUser, flights, codesCities, codesAero, codesAirCompany}, res)
//         } else {
//             res.redirect('/')
//         }  
//     } catch (error) {
//     console.log('error', error);
//     res.status(500).json({ error: error.message });
//     }
//   };

//   module.exports = { renderProfile };