const mongoose = require('mongoose');
const camp = mongoose.model('Campaign');

exports.list_all_camps = (req, res) => {
	
	camp.find({status: 'Pending'}, (err, camps) => {
		if(err) res.send(err);
		res.json(camps);
	});
};

exports.list_all_approved = (req, res) => {
	
	camp.find({status: 'Approved'}, (err, camps) => {
		if(err) res.send(err);
		res.json(camps);
	});
};
exports.read_a_camp = (req, res)=> {
	camp.findById(req.params.campId, (err, camp) => {
		if(err) res.send(err);
		res.json(camp);
	});
};

exports.update_campaign = (req, res) => {
	console.log(req.body)
	camp.findByIdAndUpdate(req.body.id, {status: req.body.status}, (err, camp) => {
		if(err) res.send(err);
		res.json(camp);
	})
}

exports.create_a_camp = (req, res)=>{
	let data = req.body
	console.log(req)

	let new_camp = new camp({
		Topic: data.Title,
		Message: data.Message,
		PostedBy: data.PostedBy,
		PostedDate: new Date(),
		image: 'images/'+req.files.image.path.split('images\\').slice(-1)[0]
	})

	new_camp.save()
	.then(()=>{
		res.status(200).send()
	})
	.catch(e => {
		console.log(e)
		res.status(502).send()
	})
}