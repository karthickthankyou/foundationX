import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ItemsService } from './items.service'
import { Item } from './entity/item.entity'
import { FindManyItemArgs, FindUniqueItemArgs } from './dtos/find.args'
import { CreateItemInput } from './dtos/create-item.input'
import { UpdateItemInput } from './dtos/update-item.input'

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Mutation(() => Item)
  createItem(@Args('createItemInput') args: CreateItemInput) {
    return this.itemsService.create(args)
  }

  @Query(() => [Item], { name: 'items' })
  findAll(@Args() args: FindManyItemArgs) {
    return this.itemsService.findAll(args)
  }

  @Query(() => Item, { name: 'item' })
  findOne(@Args() args: FindUniqueItemArgs) {
    return this.itemsService.findOne(args)
  }

  @Mutation(() => Item)
  updateItem(@Args('updateItemInput') args: UpdateItemInput) {
    return this.itemsService.update(args)
  }

  @Mutation(() => Item)
  removeItem(@Args() args: FindUniqueItemArgs) {
    return this.itemsService.remove(args)
  }
}
