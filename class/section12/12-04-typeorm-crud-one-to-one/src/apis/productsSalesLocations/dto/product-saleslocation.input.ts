import { InputType, OmitType } from '@nestjs/graphql';
import { ProductSalesLocation } from '../entities/productSalesLocation.entity';

@InputType()
export class productSalesLocationInput extends OmitType(ProductSalesLocation, ['id'], InputType) {}
