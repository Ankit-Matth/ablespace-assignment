"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapedDatachema = void 0;
const mongoose = require("mongoose");
exports.ScrapedDatachema = new mongoose.Schema({
    query: String,
    data: mongoose.Schema.Types.Mixed,
    source: String,
    timestamp: { type: Date, default: Date.now },
});
//# sourceMappingURL=ScarapedData.schema.js.map