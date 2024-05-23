import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {

  @Prop()
  title: string;

  @Prop()
  header: string;

  @Prop()
  content: string;

  @Prop({type: Date, default: Date.now})
  createdAt: Date

  @Prop({ type: 'ObjectId', ref: 'User' })
  createdBy: ObjectId;

  @Prop({ type: ['ObjectId'], ref: 'Comment', default: [] })
  comments: ObjectId[];
}

export const BlogSchema = SchemaFactory.createForClass(Blog).index({title: 'text', header: 'text'});