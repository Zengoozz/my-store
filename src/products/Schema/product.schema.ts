import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {
    @Prop({required: true})
    name: string;

    @Prop()
    price: number;

    @Prop()
    description: string;

    @Prop()
    creationDate: Date;

    @Prop()
    createdBy: string;

    @Prop()
    updateDate: Date;

    @Prop()
    updatedBy: string;

    @Prop()
    imageUrl: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);