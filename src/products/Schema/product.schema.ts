import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    price: number;

    @Prop({required: true})
    description: string;

    @Prop()
    creationDate: Date;

    @Prop()
    createdBy: string;

    @Prop()
    updateDate: Date;

    @Prop()
    updatedBy: string;

    @Prop({required: true})
    imageUrl: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);