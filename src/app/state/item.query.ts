import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ItemStore, ItemState } from './item.store';
import { Item } from './item.model';
import { Observable, distinctUntilChanged, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemQuery extends QueryEntity<ItemState, Item> {
  items$: Observable<Item[]> = this.selectAll().pipe(
    shareReplay(1),
    distinctUntilChanged()
  );

  constructor(protected override store: ItemStore) {
    super(store);
  }
}
