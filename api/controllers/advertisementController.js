const mongoose = require('mongoose');
const Adv = mongoose.model('Adv');

exports.list_all_ads = (req, res) => {
	console.log("testads");
	Adv.find({}, (err, ads) => {
		if(err) res.send(err);
		res.json(ads);
	});
};

exports.read_a_ads = (req, res)=> {
	Adv.findById(req.params.Advid, (err, Adv) => {
		if(err) res.send(err);
		res.json(Adv);
	});
};

exports.create_ad = (req, res) => {
	let data = req.body
	let new_ad = new Adv({
		name: data.Title,
		imageUrl: 'images/'+req.files.image.path.split('images\\').slice(-1)[0]
	})

	new_ad.save()
	.then(()=>{
		res.status(200).send()
	})
	.catch(e => {
		console.log(e)
		res.status(502).send()
	})
}