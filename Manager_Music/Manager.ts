
export interface Manager<T>{
    add(t:T);
    findAll();
    findById(id:number);
    findByName(name:string);
    deleteById(id:number);
    edit(id:number,t:T);
}