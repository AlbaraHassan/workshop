import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {

  @Prop()
  content: string;

  @Prop({type: Date, default: Date.now})
  createdAt: Date

  @Prop({ type: 'ObjectId', ref: 'User' })
  createdBy: ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment).index({title: 'text', header: 'text'});