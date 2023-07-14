import {Component, HostListener} from '@angular/core';
import {Item} from "../../models/item";
import {GameService} from "../../services/game.service";

const colorMap: { [k: number]: string } = {
  2: '#5F6A6A',
  4: '#909497',
  8: '#9C640C',
  16: '#F1C40F',
  32: '#239B56',
  64: '#17A589',
  128: '#1F618D',
  256: '#6C3483',
  512: '#AF7AC5',
  1024: '#B03A2E',
  2048: '#D98880',
};

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent {

  keyEventCodeMap: { [type: string]: string } = {
    ArrowRight: 'right',
    ArrowLeft: 'left',
    ArrowDown: 'down',
    ArrowUp: 'up',
  };

  constructor(public gameService: GameService){}



  getStyles(item: Item): { [p: string]: string } {
    const top = (item.row * 110 - 100) + 'px';
    const left = (item.col * 110 - 100) + 'px';
    return {
      top,
      left,
      'background-color': colorMap[item.value] || 'black'
    };
  }

  @HostListener('window: keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    console.log(event);
    if (this.keyEventCodeMap[event.code]) {
      this.gameService[this.keyEventCodeMap[event.code]]();
      console.log(this.keyEventCodeMap[event.code]);
    }

  }

}
