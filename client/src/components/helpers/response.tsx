export function response(id:string,isHome:boolean):boolean{
    console.log(id)
    return isHome ? id == '-1' : id !== '-1';
};