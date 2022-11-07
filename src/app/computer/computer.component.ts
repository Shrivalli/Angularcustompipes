import { Component, OnInit } from '@angular/core';
import { computer } from './Computer.Model';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  purpose:string;
  budget:number;
  searchTerm:string;
  searchbudget:number;
  searchbrand:string;
  Computers:computer[]=
  [
    {purpose:'General',cputype:'CPU type1',RAMtype:'RAMtype1', processortype:'processortype1',Brandname:'Dell', price:9000 },
    {purpose:'Gaming',cputype:'CPU type2',RAMtype:'RAMtype4', processortype:'processortype2',Brandname:'HP', price:12000 },
    {purpose:'General',cputype:'CPU type1',RAMtype:'RAMtype3', processortype:'processortype3',Brandname:'Lenovo', price:16000 },
    {purpose:'Business',cputype:'CPU type3',RAMtype:'RAMtype2', processortype:'processortype1',Brandname:'Apple', price:88000 },
    {purpose:'General',cputype:'CPU type4',RAMtype:'RAMtype2', processortype:'processortype4',Brandname:'Acer', price:94000 },
    {purpose:'Gaming',cputype:'CPU type1',RAMtype:'RAMtype2', processortype:'processortype1',Brandname:'Lenovo', price:36000 },
    {purpose:'Business',cputype:'CPU type2',RAMtype:'RAMtype1', processortype:'processortype3',Brandname:'HP', price:56000 },
    {purpose:'General',cputype:'CPU type3',RAMtype:'RAMtype3', processortype:'processortype4',Brandname:'Acer', price:76000 },
    {purpose:'Gaming',cputype:'CPU type1',RAMtype:'RAMtype4', processortype:'processortype2',Brandname:'Lenovo', price:86000 },
    {purpose:'Business',cputype:'CPU type2',RAMtype:'RAMtype3', processortype:'processortype4',Brandname:'Dell', price:35000 },
    {purpose:'General',cputype:'CPU type4',RAMtype:'RAMtype4', processortype:'processortype4',Brandname:'HP', price:90000 },
 
  ]
  
 constructor() { }

  ngOnInit() {
    
    console.log(this.Computers)
  }

  public suggest(Computers:computer[],brand:string):computer[]
  {
    console.log('button clicked');
    console.log(Computers);
    // console.log(purpose);
    //  console.log(budget);
     console.log(brand);
     return Computers.filter((x=>x.Brandname.toLowerCase().indexOf(brand.toLowerCase())!==-1));
  }

 public reset(brand:string,purpose:string,budget:number):void{
   brand=null;
   purpose=null;
   budget=0;
   
 }

}
