import mongoose, { Schema, model } from "mongoose";

export interface Book{
title: string;
author: string;
publishedYear: number;
genre:string;
available:boolean;
};

const bookSchema =new Schema<Book>({
title:{type:String , required:true},
author: {type:String, required:true},
publishedYear: {type:Number, required:true},
genre:{type:String, required:true},
available:{type:Boolean, default:true},
});

export const BookComplete = model<Book>("Book",bookSchema);