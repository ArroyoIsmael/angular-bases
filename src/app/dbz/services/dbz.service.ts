import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characte.interface';
import { v4  as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegueta',
            power: 75000
        }
    ];

    addCharacter(character: Character): void {

        const newCharacter: Character = {id: uuid(), ...character};

        this.characters.push(newCharacter);

        console.log('MainPage');
        console.log(newCharacter);
    }

    deleteCharacterById(id: string): void {
        this.characters = this.characters.filter(character => character.id !== id)
    }
    
}