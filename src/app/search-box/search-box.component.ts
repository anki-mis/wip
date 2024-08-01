import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  @Input() initialValue: string = '';
  @Input() debounceTime = 300;

  @Output() textChange = new EventEmitter<string>();

  inputValue = new Subject<string>();
  trigger = this.inputValue.pipe(
    debounceTime(this.debounceTime),
    distinctUntilChanged()
  );

  subscriptions: Subscription[] = [];

  constructor() {
  }

  ngOnInit() {
    const subscription = this.trigger.subscribe(currentValue => {
      this.textChange.emit(currentValue);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onInput(e: any) {
    console.log('e.target.value - ', e.target.value);
    this.inputValue.next(e.target.value);
  }
}
