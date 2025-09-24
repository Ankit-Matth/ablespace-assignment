import * as mongoose from 'mongoose';
export declare const ScarapedDataSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    timestamp: NativeDate;
    query?: string;
    data?: any;
    source?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    timestamp: NativeDate;
    query?: string;
    data?: any;
    source?: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    timestamp: NativeDate;
    query?: string;
    data?: any;
    source?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export interface ScarapedData extends mongoose.Document {
    query: string;
    data: any;
    source: string;
    timestamp: Date;
}
