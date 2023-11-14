import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'

@InputType()
export class ItemWhereUniqueInput {
  id: number
}

@InputType()
export class ItemWhereInputStrict
  implements RestrictProperties<ItemWhereInputStrict, Prisma.ItemWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  name: StringFilter

  AND: ItemWhereInput[]
  OR: ItemWhereInput[]
  NOT: ItemWhereInput[]
}

@InputType()
export class ItemWhereInput extends PartialType(ItemWhereInputStrict) {}

@InputType()
export class ItemListRelationFilter {
  every?: ItemWhereInput
  some?: ItemWhereInput
  none?: ItemWhereInput
}

@InputType()
export class ItemRelationFilter {
  is?: ItemWhereInput
  isNot?: ItemWhereInput
}
