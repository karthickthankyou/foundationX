import { Item } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ItemEntity implements RestrictProperties<ItemEntity, Item> {
  @IsInt()
  id: number

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsString()
  name: string
}
