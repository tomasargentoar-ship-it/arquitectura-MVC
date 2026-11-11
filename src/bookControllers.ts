import { type Request, type Response } from "express";
import { sendResponse } from "./response.js";
import { BookComplete } from "./bookModel.js"


export const createBook = async (req:Request,res:Response)=>{
try{

    const book = await BookComplete.create(req.body);

    await sendResponse(res,201,true,"Book created successfully",book);

}catch(error){

    await sendResponse(res,400,false,"Error creating book",error);

}}


export const readBook = async (req:Request,res:Response)=>{
try{
    const book = await BookComplete.findById(req.params.id);

    await sendResponse(res,200,true,"Book retrieved successfully",book);

}catch(error){

    await sendResponse(res,404,false,"Error retrieving book",error);

}}


export const updateBook = async (req:Request,res:Response)=>{
try{

    const book = await BookComplete.findByIdAndUpdate(req.params.id,req.body,{new:true});
     
    
    await sendResponse(res,201,true,"Book updated successfully",book);
}catch(error){

    await sendResponse(res,400,false,"Error updating book",error);   

}}


export const deleteBook = async (req:Request,res:Response)=>{
try{

const book = await BookComplete.findByIdAndDelete(req.params.id);

await  sendResponse(res,200,true,"Book deleted successfully",book);

}catch(error){

await sendResponse(res,400,false,"Error deleting book",error);

}}
