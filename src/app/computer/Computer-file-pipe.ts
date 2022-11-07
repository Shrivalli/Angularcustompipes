import {Pipe,PipeTransform} from '@angular/core';
import { computer } from './Computer.Model';

@Pipe({
  name:'brandfilterPipe'
})
export class brandfilterPipe implements PipeTransform{
  transform(CPUs:computer[],brandname:string)
  {
    if(!CPUs||!brandname)
    {
      return CPUs;
    }
    return CPUs.filter((x=>x.Brandname.toLowerCase().indexOf(brandname.toLowerCase())!==-1));
  }
}
@Pipe({
  name:'purposefilterPipe'
})
export class purposefilterPipe implements PipeTransform{
    transform(CPUs:computer[],searchterm:string)
    {
     if(!CPUs|| !searchterm)   
   {
       return CPUs;
   }
    return CPUs.filter((x=>x.purpose.toLowerCase().indexOf(searchterm.toLowerCase())!==-1));
    }
  }
@Pipe({
    name:'budgetfilterPipe'
    })
  export class budgetfilterPipe implements PipeTransform{
    transform(CPUs:computer[],searchbudget:number)
    {
     if(!CPUs|| !searchbudget)   
   {
       return CPUs;
   }
    return CPUs.filter((x=>x.price<searchbudget));
    }
  }
