const fs = require('fs')

const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    try {
        const collection = await dbService.getCollection('toy');
        let toys = await collection.find({}).toArray();
        return toys;
    } catch (err) {
        throw err
    }
    // let toys = [...gToys]

    // if(filterBy.name){
    //     const regex = new RegExp(filterBy.name, 'i')
    //     toys = toys.filter(toy => regex.test(toy.name));
    // }

    // if(filterBy.label){
    //     toys = toys.filter(toy => toy.labels.includes(filterBy.label));
    // }
    // return Promise.resolve(toys)
}

async function get(id) {
    try {
        const collection = await dbService.getCollection('toy');
        const toy = await collection.findOne({ '_id': ObjectId(id) });
        return toy;
    } catch (err) {
        throw err;
    }
    // let toy = gToys.find(currToy => currToy._id === id);
    // toy = { ...toy };
    // toy.reviews = ['Bad toy', 'DONT PLAY'];
    // return Promise.resolve(toy);
}

async function post(toy) {
    try {
        const collection = await dbService.getCollection('toy');
        const addedToy = await collection.insertOne(toy);
        toy._id = addedToy.insertedId.toString()
        return toy;
    } catch (err) {
        throw err
    }
    // toy._id = _makeId();
    // gToys.push(toy);
    // return _saveToysToFile()
    //     .then(() => toy)
}

async function put(toy) {
    try {
        let id = (typeof toy._id === 'String') ? ObjectId(toy._id) : toy._id;
        delete toy._id
        const collection = await dbService.getCollection('toy')
        await collection.updateOne({ "_id": id }, { $set: { ...toy } })
        toy._id = id.toString();
        return toy
    } catch (err) {
        throw err
    }

    // const idx = gToys.findIndex(currToy => currToy._id === toy._id);
    // gToys.splice(idx, 1, toy);
    // return _saveToysToFile()
    //     .then(() => toy)
}

async function remove(id) {
    try {
        console.log('arrived');
        const collection = await dbService.getCollection('toy');
        await collection.deleteOne({ '_id': ObjectId(id) })
        return id;
    } catch (err) {
        throw err
    }

    // const idx = gToys.findIndex(currToy => currToy._id === id);
    // gToys.splice(idx, 1);
    // return _saveToysToFile()

}

module.exports = {
    query,
    get,
    post,
    put,
    remove
}