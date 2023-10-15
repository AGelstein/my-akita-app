import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Item } from './item.model';

export interface ItemState extends EntityState<Item> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'items' })
export class ItemStore extends EntityStore<ItemState, Item> {
  constructor() {
    super({
      loading: false,
    });
  }

  addItems(items: Item[]) {
    this.set(items);
  }
}
