import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: "",
  }

  constructor() {
    
  }

  //Recupera os dados do localStorage
  getConfigData(): any{
    return localStorage.getItem(config_key_name) || {};
  }

  //Grava os dados no localStorage
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: "",
    };

    if(config.showSlide){
      config.showSlide = showSlide;
    }

    if(config.name){
      config.name = name;
    }

    if(config.username){
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));

  }

}
