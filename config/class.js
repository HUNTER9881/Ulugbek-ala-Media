const callback = require("./callback");
const {
    v4: uuidv4
} = require('uuid');
module.exports = class HelloClass {
    constructor(Model, Request, Response, Next, user, serial, kino, mult_serial) {
        this.Model = Model;
        this.req = Request;
        this.res = Response;
        this.next = Next;
        this.user = user
        this.serial = serial
        this.kino = kino
        this.mult_serial = mult_serial
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





        // await DATA.save({
        //     ...DATA,
        //     ...RESULT
        // })
        // res.json(DATA)
        // .then(() => {
        //     res.json(callback.SUCCESS(result));
        // })
        // .catch((error) => {
        //     res.json(callback.ERROR(error));
        // });








    }
    // @description: Yagona id boyicha malumotlarni olish
    async FILTER_BY_ID() {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;


        const user = this.user
        const serial = this.serial
        const kino = this.kino
        const mult_serial = this.mult_serial

        
        const key = [user, serial, kino, mult_serial] 

        console.log(key)






        const id = req.params.id
        await MODEL
            .find({
                [key]: id
            })
            .exec((error, data) => {
                if (error) {
                    res.json(callback.ERROR(error));
                } else {
                    res.json(callback.SUCCESS(data));
                }
            });

    }

};