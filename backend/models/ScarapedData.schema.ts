
import * as mongoose from 'mongoose';

export const ScarapedDataSchema = new mongoose.Schema({
  query: String,
  data: mongoose.Schema.Types.Mixed,
  source: String,
  timestamp: { type: Date, default: Date.now },
});

export interface ScarapedData extends mongoose.Document {
  query: string;
  data: any;
  source: string;
  timestamp: Date;
}
