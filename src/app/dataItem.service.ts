import { Injectable } from '@angular/core';
import { DATAITEMS } from "~/app/mock-data-item";
import { DataItem } from "~/app/dataItem";

@Injectable()
export class DataItemService {
   
    getDataItems(): DataItem[] {
        return DATAITEMS;
    }

        
    getVariableWidthItems(): DataItem[] {
      const result = new Array<DataItem>();
      //for (let i = 0; i < 10; i++) {
        //  if (i % 2 === 0) {
              result.push(new DataItem(0, "Docteur ", "Eloise.", null, null, "res://ortho01", false, null, null, 150, "white"));
         // } else {
              result.push(new DataItem(1, "Docteur. " , "Monique Asla.", null, null, "res://lamai", false, null, null, 150, "white"));
              result.push(new DataItem(2, "Assistante " , "Eloise Dumont.", null, null, "res://ortho01", false, null, null, 150, "white"));
              result.push(new DataItem(3, "Docteur.  " , "Eric Calto.", null, null, "res://lamai", false, null, null, 150, "white"));
              result.push(new DataItem(4, "Docteur.  " , "Etienne Milpo.", null, null, "res://ortho01", false, null, null, 150, "white"));
              result.push(new DataItem(5, "Assistante " , "Florence Gibb.", null, null, "res://ortho01", false, null, null, 150, "white"));
              result.push(new DataItem(6, "Assistante " , "Slyvie Etorie.", null, null, "res://ortho01", false, null, null, 150, "white"));
              result.push(new DataItem(7, "Assistante " , "Patricia Calvie.", null, null, "res://lamai", false, null, null, 150, "white"));
              result.push(new DataItem(8, "Docteur.  " , "Pierre Etompe.", null, null, "res://ortho01", false, null, null, 150, "white"));
              result.push(new DataItem(9, "Docteur.  " , "Edouard Molibene.", null, null, "res://lamai", false, null, null, 150, "white"));
              result.push(new DataItem(10, "Docteur.  " , "Charlie Fonzi.", null, null, "res://ortho01", false, null, null, 150, "white"));

      // }
      //}

      return result;
    }
    
  }