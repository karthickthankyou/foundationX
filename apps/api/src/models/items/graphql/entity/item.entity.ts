import { ObjectType } from '@nestjs/graphql'
import { Item as ItemType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Item implements RestrictProperties<Item, ItemType> {
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
