import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'map2';
  position:any;
  // currentLat:any;
  // currentLong:any;
  
  ngAfterViewInit(){
    this.getLocation();
  }
  ngOnInit(){
  //  getLocation() {
  //     if(navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(showPosition());
  //     } else {
  //       console.log("Geo Location not supported by browser");
  //     }
  //   }
  //   //function that retrieves the position
  //   showPosition(position) {
  //     var location = {
  //       longitude: position.coords.longitude,
  //       latitude: position.coords.latitude
  //     }
  //     console.log(location)
  //   }
  } 

  getLocation() {
    if(navigator.geolocation) {
      console.log(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geo Location not supported by browser");
    }
  }
  // function that retrieves the position
  showPosition(position) {
    var location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
      
    }
    console.log(location)
    // this.currentLat= location.latitude;
    //  this.currentLong= location;
    console.log(location.latitude);
    console.log(location.longitude);
    // console.log(this.currentLat);
    // console.log(this.currentLong);
    $("#currentLong").html(position.coords.longitude);
    $("#currentLat").html(position.coords.latitude);
    alert("Latitude is "+position.coords.latitude);
    alert("Longitude is "+position.coords.longitude);
  }

  // angular.element(document).ready(function(){

  // })
// Funcall = function()
// {
//   console.log("function");
//   alert("message")
// }
 

}