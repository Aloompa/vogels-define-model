"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vogels = require("vogels-promisified");
var defineModel = function (name, definition) {
    var Model = vogels.define(name, definition);
    return Object.assign({}, Model, {
        get: function (body) {
            return new Promise(function (resolve, reject) {
                Model.get(body, function (err, data) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(data);
                });
            });
        },
        query: function (body) {
            return new Promise(function (resolve, reject) {
                Model.query(body, function (err, data) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(data);
                });
            });
        },
        update: function (body) {
            return new Promise(function (resolve, reject) {
                Model.update(body, function (err, data) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(data);
                });
            });
        },
        destroy: function (body) {
            return new Promise(function (resolve, reject) {
                Model.destroy(body, function (err, data) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(data);
                });
            });
        },
        create: function (body) {
            return new Promise(function (resolve, reject) {
                Model.create(body, function (err, data) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(data);
                });
            });
        }
    });
};
exports.default = defineModel;
