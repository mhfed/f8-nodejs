module.exports = {
    mutipleMongooseToObject: (mongooses) => {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    MongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
