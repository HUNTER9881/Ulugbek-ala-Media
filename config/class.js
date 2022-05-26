const callback = require("./callback");
const ObjectId = require('mongodb').ObjectId

const {
    v4: uuidv4
} = require('uuid');
module.exports = class HelloClass {
    constructor(Model, Request, Response, Next) {
        this.Model = Model;
        this.req = Request;
        this.res = Response;
        this.next = Next;
    }
    // @description: Malumot yaratish
    async CREATE_DATA() {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;
        const defaultBody = req.body;

        const uuid = uuidv4()
        const result = await MODEL.create({
            ...defaultBody,
            uuid: uuid,

        });
        await result
            .save()
            .then(() => {
                res.json(callback.SUCCESS(result));
            })
            .catch((error) => {
                res.json(callback.ERROR(error));
            });
    }
    // @description: Barcha malumotlarni olish
    async GET_ALL(...populate) {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;

        await MODEL.find()
            .populate([...populate])
            .sort({
                createdAt: -1
            })
            .exec((error, data) => {
                if (error) {
                    res.json(callback.ERROR(error));
                } else {
                    res.json(callback.SUCCESS(data));
                }
            });
    }
    // @description: Bitta malumotni  olish
    async GET_ONE(...populate) {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;
        const {
            id
        } = req.params;

        await MODEL.findById(id).populate([...populate]).exec((error, data) => {
            if (error) {
                res.json(callback.ERROR(error));
            } else {
                res.json(callback.SUCCESS(data));
            }
        });
    }
    // @description: O'chirish
    async DELETE_ONE() {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;
        const {
            id
        } = req.params;

        await MODEL.findByIdAndDelete({
            _id: id
        }).exec((error, data) => {
            if (error) {
                res.json(callback.ERROR(error));
            } else {
                res.json(callback.SUCCESS("😁😁😁"));
            }
        });
    }
    // @description: Tahrirlash
    async UPDATE_DATA(...element) {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;
        const defaultBody = req.body;
        const {
            id
        } = req.params;
        const DATA = await MODEL.findByIdAndUpdate(id)
        const result = Object.values(DATA)[5]
        const keys = Object.keys(result)
        const values_body = Object.values(defaultBody)
        const key_body = Object.values(defaultBody)
        let datas = []
        for (const a of keys) {
            for (const b of key_body) {
                if (a == b) {
                    const data = values_body.reduce((result, field, index) => {
                        result[a[index]] = field;
                        return result;
                    }, {})
                    data.save()
                    datas.push(data)

                }
            }
        }
        res.json(datas)
    }
    // @description: Yagona id boyicha malumotlarni filtrlash
    async FILTER_BY_ID() {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;
        await MODEL.aggregate([{
                $facet: {
                    "user": [{
                        $match: {
                            user_ID: ObjectId(req.params.id)
                        }
                    }],
                    "multik": [{
                        $match: {
                            multik_ID: ObjectId(req.params.id)
                        }
                    }],
                    "kino": [{
                        $match: {
                            kino_ID: ObjectId(req.params.id)
                        }
                    }],
                    "serial": [{
                        $match: {
                            serial_ID: ObjectId(req.params.id)
                        }
                    }],
                    "category": [{
                        $match: {
                            category_ID: ObjectId(req.params.id)
                        }
                    }],
                    "director": [{
                        $match: {
                            director_ID: ObjectId(req.params.id)
                        }
                    }],
                    "tag": [{
                        $match: {
                            tag_ID: ObjectId(req.params.id)
                        }
                    }],
                    "quality": [{
                        $match: {
                            quality_ID: ObjectId(req.params.id)
                        }
                    }],
                    "genre": [{
                        $match: {
                            genre_ID: ObjectId(req.params.id)
                        }
                    }],
                    "year": [{
                        $match: {
                            year_ID: ObjectId(req.params.id)
                        }
                    }],
                    "actor": [{
                        $match: {
                            actor_ID: ObjectId(req.params.id)
                        }
                    }],
                    "country": [{
                        $match: {
                            country_ID: ObjectId(req.params.id)
                        }
                    }],
                    "mult_serial": [{
                        $match: {
                            multik_ID: ObjectId(req.params.id)
                        }
                    }],
                    "reply": [{
                        $match: {
                            comment_ID: ObjectId(req.params.id)
                        }
                    }],
                }
            }])
            .exec((error, data) => {
                if (error) {
                    res.json(callback.ERROR(error));
                } else {
                    res.json(callback.SUCCESS(data));
                }
            });
    }

    async CREATE_WITH_IMAGE(pathName) {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;

        // elementlarni massivga joylash
        function arrayComplile (array, body) {
            for(let item of body) {
                const values = item
                array.push(values)
                return array
            }
        }

        // rasmlarni massivga joylash
        const arrayImage = []
        const FILES = req.files
        for (let item of FILES) {
            const { filename } = item
            arrayImage.push(filename)
        }

        const result = new MODEL({
            [pathName]: arrayImage,
            category_ID: arrayComplile([], req.body.category_ID),
            director_ID: arrayComplile([], req.body.director_ID),
            tag_ID: arrayComplile([], req.body.tag_ID),
            quality_ID: arrayComplile([], req.body.quality_ID),
            genre_ID: arrayComplile([], req.body.genre_ID),
            year_ID: arrayComplile([], req.body.year_ID),
            actor_ID: arrayComplile([], req.body.actor_ID),
            country_ID: arrayComplile([], req.body.country_ID),
            ...req.body,
        })
        await result
            .save()
            .then(() => {
                res.json(callback.SUCCESS(result));
            })
            .catch((error) => {
                res.json(callback.ERROR(error));
            });




    }

};