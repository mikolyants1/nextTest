

import { PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store/store/store";
import { TypedUseSelectorHook, useDispatch,useSelector } from 'react-redux';
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { ChangeEvent } from "react";

export interface initial {
  name:string,
  id:string,
  token:string
}
export type select = ReturnType<typeof store.getState>;

export type dispatch = typeof store.dispatch;

export const useAppDispatch:()=> dispatch = useDispatch;

export const useAppSelector:TypedUseSelectorHook<select> = useSelector;

export type pay<T> = PayloadAction<T>;

export interface IPost {
  _id:string,
  title:string,
  text:string
}
export interface IUser {
  _id:string,
  name:string,
  pass:string,
  posts:IPost[]
}
export interface query {
  data:IUser,
  isLoading:boolean,
  isError:boolean
}

export interface IParams {
  id:string
};

export type Und<T> = undefined | T;

export interface IStore {
  posts:initial
}
export type form = Omit<IUser,"_id"|'posts'>;

export type Control<T extends string> = ControllerRenderProps<FieldValues,T>;

export interface ICheck {
   _id:string,
   token:string
}
export interface res<T> {
  url:string
  method:string,
  body?:T
}
export interface body1 {
  name:string,
  pass:string
}

export interface IPostForm {
  text:string,
  title:string
}

export type bodyPost<T> = T&{id:string};

export type EvtC<T> = ChangeEvent<T>;

export type union = HTMLInputElement|HTMLTextAreaElement;

export type IHOC = (...args:any[]) => JSX.Element;