import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characte.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDbzComponent {


  @Input()
  public charcaterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  
  public onDeleteCharacter(id?: string): void {
    //TODO: Emitir Id del personaje
    if(!id) return;
    this.onDelete.emit(id);

  }

}
