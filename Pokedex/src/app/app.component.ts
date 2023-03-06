import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../app/pokemon/pokemon.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';

  onKeyUp(event:any) 
  { 
    console.log(event.target.value );
    
  }

  ngOnInit(){
    console.log("test pwet");
    
  }
}
