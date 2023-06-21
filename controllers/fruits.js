const Fruit = require('../models/fruit.js')

module.exports = {
    index,
    new: newFruit,
    create,
    show,
    deleteFruit,
    edit,
    update,

}

async function index (req, res) {
    const allFruit = await Fruit.find();
    res.render('fruits/', {
        fruits: allFruit
    })
}

function newFruit (req, res) {
    res.render('fruits/new', {errorMsg: ''})

}

async function create (req, res) {
    req.body.ripe = !!req.body.ripe
    try {
        await Fruit.create(req.body);
        res.redirect('/fruits')
        } catch (error) {
            console.log(error);
            res.render('fruits/new', { errorMsg: error.message})
        }
    } 

async function deleteFruit (req,res) {
    try {
        const toDeleteFruit = await Fruit.findById(req.params.id);
        console.log(toDeleteFruit);
        await Fruit.deleteOne(toDeleteFruit);
        res.redirect('/fruits')
        
    }
    catch (error) {
        console.log(error);
        res.render('fruits/new', { errorMsg: error.message})
    }
    

    
    
    // Fruit.deleteOne({ _id: req.params.id }, function(err,data) {
    //     if (!err) {
    //         console.log(data);
    //             console.log("fruit successfully deleted")
    //     }
    //     else {
    //             console.log("error")
    //     }
    // });
    // res.redirect("/fruits");
}

function show (req, res) {
    Fruit.findById(req.params.id).then((fruits) => {
        res.render('fruits/show', {
            fruits
        })
    })
}

async function edit (req, res) {
    const fruit = await Fruit.findById(req.params.id);
    res.render('fruits/edit', {
        fruit
    })
}

async function update(req, res) {
    req.body.ripe = !!req.body.ripe;
    const newFruit = await Fruit.updateOne({_id:req.params.id}, req.body)
    res.redirect(`/fruits/${req.params.id}`);
}